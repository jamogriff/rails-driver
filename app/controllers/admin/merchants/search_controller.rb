class Admin::Merchants::SearchController < ApplicationController

  # Pretty whack; API only returns a single merchant so map may be what's broken?
  def index
    @search_term = params[:merchant_name]
    response = Faraday.get("#{ENV['RAILS_ENGINE_DOMAIN']}/api/v1/merchants/find?name=#{@search_term}")
    merchants_data = JSON.parse(response.body, symbolize_names: true)
    @merchants = merchants_data[:data].map do |merchant_data|
      Merchant.new(merchant_data)
    end
  end
end
