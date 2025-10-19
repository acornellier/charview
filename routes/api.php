<?php

use App\Http\Controllers\BnetRealmController;
use App\Http\Controllers\WclCharController;

Route::get('/wclchar', [WclCharController::class, 'index']);
Route::get('/realms', [BnetRealmController::class, 'index']);
