<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class CalendarController extends Controller
{
    /**
     * @return View
     */
    public function index() : View
    {
        return view('calendar');
    }
}
