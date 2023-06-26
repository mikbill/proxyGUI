<?php

namespace Index\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ProxyRequestsFilterRequest
 * @package Index\Http\Requests\Auth
 */
class ProxyRequestsFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'clientID' => ['nullable', 'int'],
            'msisdn' => ['nullable', 'int'],
        ];
    }
}
