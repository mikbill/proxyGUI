<?php

namespace Index\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Index\Models\ProxyRequest
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $clientID
 * @property int $msisdn
 * @property string $operationName
 * @property int|null $lifecellCode
 * @property string|null $lifecellDescription
 * @property int|null $clientCode
 * @property int|null $clientDescription
 * @property string $transactionId
 * @method static \Database\Factories\ProxyRequestFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereClientCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereClientDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereClientID($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereLifecellCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereLifecellDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereMsisdn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereOperationName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereTransactionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyRequest whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProxyRequest extends Model
{
    use HasFactory;

    protected $table = "proxy_requests";

}
