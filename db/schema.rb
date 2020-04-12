# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_11_213750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignment_submissions", id: :serial, force: :cascade do |t|
    t.integer "assignment_id"
    t.integer "student_id"
    t.integer "duration"
    t.date "submission_date"
  end

  create_table "assignments", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.text "content"
    t.integer "day"
    t.integer "chapter"
    t.integer "duration"
  end

  create_table "assistance_requests", id: :serial, force: :cascade do |t|
    t.integer "student_id"
    t.integer "teacher_id"
    t.integer "assignment_id"
    t.datetime "created_at"
    t.datetime "started_at"
    t.datetime "completed_at"
    t.text "student_feedback"
    t.text "teacher_feedback"
  end

  create_table "cohorts", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.date "start_date"
    t.date "end_date"
  end

  create_table "nutrients", force: :cascade do |t|
    t.bigint "recipe_id"
    t.integer "protein"
    t.integer "fiber"
    t.integer "carbs"
    t.integer "fat"
    t.integer "energies"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_nutrients_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "label"
    t.text "steps"
    t.string "img_url"
    t.string "src_url"
    t.string "health_labels"
    t.text "ingredients"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.string "email", limit: 255
    t.string "phone", limit: 32
    t.string "github", limit: 255
    t.date "start_date"
    t.date "end_date"
    t.integer "cohort_id"
  end

  create_table "teachers", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.date "start_date"
    t.date "end_date"
    t.boolean "is_active", default: true
  end

  create_table "user_recipes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "recipe_id"
    t.string "weekday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_user_recipes_on_recipe_id"
    t.index ["user_id"], name: "index_user_recipes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assignment_submissions", "assignments", name: "assignment_submissions_assignment_id_fkey", on_delete: :cascade
  add_foreign_key "assignment_submissions", "students", name: "assignment_submissions_student_id_fkey", on_delete: :cascade
  add_foreign_key "assistance_requests", "assignments", name: "assistance_requests_assignment_id_fkey", on_delete: :cascade
  add_foreign_key "assistance_requests", "students", name: "assistance_requests_student_id_fkey", on_delete: :cascade
  add_foreign_key "assistance_requests", "teachers", name: "assistance_requests_teacher_id_fkey", on_delete: :cascade
  add_foreign_key "nutrients", "recipes"
  add_foreign_key "students", "cohorts", name: "students_cohort_id_fkey", on_delete: :cascade
  add_foreign_key "user_recipes", "recipes"
  add_foreign_key "user_recipes", "users"
end
