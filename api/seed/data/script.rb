require 'csv'
require 'faker'
require 'active_support/all'

CSV.open('tmp/data.csv', 'wb') do |csv|
  csv << [
    'Name',
    'Timezone',
    'Day of Week',
    'Available at',
    'Available until'
  ]

  5.times do
    coach = Faker::Name.name
    timezone = ActiveSupport::TimeZone.us_zones.sample

    # TODO create optional MULTIPLE timeslots for a single day
    %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday).each do |day|
      next unless [true, false].sample
      start_time = Faker::Time.between(1.day.ago, 1.day.from_now, :morning).at_beginning_of_hour
      end_time = start_time.advance(hours: Faker::Number.between(2, 8), minutes: [0, 30].shuffle)
      csv << [
        coach,
        timezone,
        day,
        start_time.strftime('%l:%M%p'),
        end_time.strftime('%l:%M%p')
      ]
    end
  end
end
