<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class BnetRealmController extends Controller
{
  private static int $realmsTtlSeconds = 60 * 60 * 24; // 24 hours
  private static int $tokenTtlSeconds = 60 * 60 * 24; // 24 hours

  public function index()
  {
    if (!isset($_GET['region'])) {
      return response()->json('Region parameter is required', 400);
    }

    $region = $_GET['region'];
    $realms = Cache::remember(
      "realms-$region",
      self::$realmsTtlSeconds,
      function () use ($region) {
        return $this->getRealms($region);
      },
    );

    return response()->json([
      'status' => 'success',
      'data' => $realms,
    ]);
  }

  private function getRealms(string $region)
  {
    $token = $this->getAccessToken();

    return Http::withToken($token)
      ->get("https://$region.api.blizzard.com/data/wow/realm/index", [
        'namespace' => "dynamic-$region",
        'locale' => 'en_US',
        'region' => $region,
      ])
      ->json();
  }

  private function getAccessToken(): string
  {
    return Cache::remember('bnet_token', self::$tokenTtlSeconds, function () {
      $res = Http::asForm()->post('https://us.battle.net/oauth/token', [
        'grant_type' => 'client_credentials',
        'client_id' => config('services.blizzard.client_id'),
        'client_secret' => config('services.blizzard.client_secret'),
      ]);

      if ($res->failed()) {
        throw new RuntimeException('Failed to get Battle.net token');
      }

      return $res->json('access_token');
    });
  }
}
