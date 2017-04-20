class ContactsController < ApplicationController
	protect_from_forgery with: :exception

	def index
		@contacts = Contact.all
		if params[:key]
			@contacts = Contact.search(params[:key]).order(id: :desc)
		else
			@contacts = Contact.all.order(id: :desc)
		end
	end

	def show
		@contact = Contact.find_by(id: params[:id])
	end

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)
		if @contact.valid?
			@contact.save
			redirect_to @contact
		else
			render :new
		end
	end

	private
	def contact_params
		params.require(:contact).permit(:name, :email, :phone, :note)
	end
end