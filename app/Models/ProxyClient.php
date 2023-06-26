<?php

namespace Index\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Index\Models\ProxyClient
 *
 * @property int $id
 * @property string $name
 * @property string $update_date
 * @property string|null $production_url
 * @property string|null $testing_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Database\Factories\ProxyClientFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereProductionUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereTestingUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereUpdateDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProxyClient whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProxyClient extends Model
{
    use HasFactory;

    protected $table = "proxy_clients";

    protected $fillable = [
        "id", "name", "update_date", "production_url", "testing_url"
    ];
}
