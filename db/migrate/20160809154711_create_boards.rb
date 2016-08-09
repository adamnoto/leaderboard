class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :total_vote, null: false

      t.timestamps
    end
  end
end
