<?php

namespace Index\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateProxyUserRequest
 * @package Index\Http\Requests\Proxy
 */
class CreateProxyUserRequest extends FormRequest
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
            'id' => ['required', 'int'],
            'name' => ['required', 'string'],
            'update_date' => ['required', 'date'],
            'production_url' => ['required', 'string'],
            'testing_url' => ['string', 'nullable'],
        ];
    }
}
