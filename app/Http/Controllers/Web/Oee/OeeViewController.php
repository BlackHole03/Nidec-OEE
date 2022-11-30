<?php

namespace App\Http\Controllers\Web\Oee;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OeeViewController extends Controller
{
    public function visualization() {
        return view('oee.visualization');
    }

    public function detail($id) {
        return view('oee.detail', [
            'id' => $id
        ]);
    }

    public function report() {
        return view('oee.report');
    }
}
