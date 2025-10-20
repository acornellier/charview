<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WclCharRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'name' => ['required', 'string', 'min:2'],
      'realmSlug' => ['required', 'string'],
      'region' => ['required', 'string'],
    ];
  }
}
