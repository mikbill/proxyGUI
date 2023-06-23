<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proxy_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("clientID")->unsigned();
            $table->integer("msisdn")->unsigned();
            $table->string("operationName");
            $table->integer("lifecellCode")->nullable();
            $table->string("lifecellDescription")->nullable();
            $table->integer("clientCode")->nullable();
            $table->integer("clientDescription")->nullable();
            $table->string("transactionId")->unique()->index("transactionId");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proxy_requests');
    }
};
