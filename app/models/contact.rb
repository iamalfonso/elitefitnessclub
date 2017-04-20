class Contact < ActiveRecord::Base
	validates :name, presence: true

	def self.search(search)
		where("name like :name or note like :note", {name: "%#{search}%", note: "%#{search}%"})
	end
end
