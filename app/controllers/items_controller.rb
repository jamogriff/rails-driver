class ItemsController < ApplicationController
  def show
    @item_id = params[:id]
  end

  def edit
    @item_id = params[:id]
    @merchant_id = params[:merchant_id]
  end

  def new
    @merchant_id = params[:merchant_id]
  end
end
