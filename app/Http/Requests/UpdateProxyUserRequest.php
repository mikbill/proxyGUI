<?php

namespace Index\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateProxyUserRequest
 * @package Index\Http\Requests\Proxy
 */
class UpdateProxyUserRequest extends FormRequest
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
            'name' => ['string', 'nullable'],
            'update_date' => ['date', 'nullable'],
            'production_url' => ['string', 'nullable'],
            'testing_url' => ['string', 'nullable'],
        ];
    }
}
