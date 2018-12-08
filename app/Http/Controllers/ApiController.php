<?php

namespace App\Http\Controllers;

use App\Calendar;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiController extends Controller
{
    /**
     * @param int $selectWeekNum
     * @return Response
     */
    public function index(int $selectWeekNum): Response
    {

        Carbon::setWeekStartsAt(Carbon::SUNDAY);

        $calendarList = Calendar::select('id')
            ->addSelect('target_date')
            ->addSelect('title')
            ->whereBetween('target_date', [
                Carbon::today()
                    ->startOfWeek()
                    ->addDays(7 * $selectWeekNum)
                    ->toDateTimeString(),
                Carbon::today()
                    ->startOfWeek()
                    ->addDays(7 * $selectWeekNum)
                    ->addDays(7)
                    ->subSecond()
                    ->toDateTimeString(),
            ])
            ->orderBy('target_date')
            ->get();

        return new Response(compact('calendarList'));
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function add(Request $request): Response
    {
        Calendar::create([
            'target_date' => $request->get('dateTime'),
            'title' => $request->get('title') ?: '',
        ]);
        return new Response(['ok']);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request): Response
    {
        Calendar::destroy($request->get('id'));
        return new Response(['ok']);
    }
}
