<?php

namespace App\Http\Controllers\Api\MasterData;

use App\Http\Controllers\Controller;
use App\Models\History\History;
use App\Models\MasterData\History\MachineHistory;
use Illuminate\Http\Request;
use App\Models\MasterData\MasterMachine;

class MasterMachineController extends Controller
{
    public function index(Request $request)
    {
        $name      = $request->name;
        $symbols = $request->symbols;
        $masterMachine = MasterMachine::where('IsDelete', 0)
            ->when($name, function ($query, $name) {
                return $query->where('Name', $name);
            })->when($symbols, function ($query, $symbols) {
                return $query->where('Symbols', $symbols);
            })
            ->with([
                'user_created',
                'user_updated',
                'running'
            ])
            ->orderBy('Time_Updated', 'desc')
            ->paginate($request->length);

        return response()->json([
            'recordsTotal' => $masterMachine->total(),
            'recordsFiltered' => $masterMachine->total(),
            'data' => $masterMachine->toArray()['data']
        ]);
    }

    public function history(Request $request)
    {
        $machines = History::where('Table_Name', 'Master_Machine')
            ->orderBy('ID', 'desc')
            // ->get();
            ->paginate($request->length);
        // dd($machines);
        return response()->json([
            'recordsTotal' => $machines->total(),
            'recordsFiltered' => $machines->total(),
            'data' => $machines->toArray()['data']
        ]);
    }

    public function get(Request $request)
    {
        $size = $request->has('size') ? $request->size : 10;

        return response()->json(
            MasterMachine::where('IsDelete', 0)->paginate($size)
        );
    }

    public function show($id)
    {
        return response()->json(
            MasterMachine::where('IsDelete', 0)->find($id)
        );
    }
}
