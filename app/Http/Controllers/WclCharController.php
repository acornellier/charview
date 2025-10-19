<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WclCharController extends Controller
{
  public function index()
  {
    $name = $_GET['name'];
    $realmSlug = $_GET['realmSlug'];
    $region = $_GET['region'];

    $url = $this->buildUrl($name, $realmSlug, $region);
    $response = Http::get($url);

    if ($response->failed()) {
      $json = json_decode($response->body());
      return response()->json($json->error, $json->status);
    }

    return $response->json();
  }

  private function buildUrl($name, $realmSlug, $region)
  {
    $encodedName = rawurlencode($name);
    $apiKey = config('services.wcl.api_key');
    return "https://www.warcraftlogs.com:443/v1/parses/character/$encodedName/$realmSlug/$region?api_key=$apiKey&includeCombatantInfo=true";
  }
}
