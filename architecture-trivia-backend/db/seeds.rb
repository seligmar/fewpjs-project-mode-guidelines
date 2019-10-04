# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create(name: "Mary")
user2 = User.create(name: "Adnan")
adnan = Game.create(user_id: user2.id, score: 11)


wash_DC = Question.create( img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/PP_march_4.JPG", name: "U.S. Capitol", correct_answer: "Washington, D.C., USA", answer1: "Berlin, Germany", answer2: "Seattle, WA, USA", answer3: "Dublin, Ireland") 
florence = Question.create(img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Florence_Cathedral.jpg", name: "Cathedral of Santa Maria del Fiore", correct_answer: "Florence, Italy", answer1: "Buenos Aires, Argentina", answer2: "Havana, Cuba", answer3: "Berlin, Germany")
berlin = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/BerlinerDom.jpg", name: "Berliner Dom", correct_answer: "Berlin, Germany", answer1: "Florence, Italy", answer2: "Istanbul, Turkey", answer3: "Johannesburg, South Africa")
mali = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/GreatMosqueMali.jpg", name: "Great Mosque", correct_answer: "Djenne, Mali", answer1: "Johannesburg, South Africa", answer2: "Istanbul, Turkey", answer3: "Buenos Aires, Argentina")
nyc = Question.create(img: "https://static01.nyt.com/images/2019/06/30/nyregion/30flatiron1/merlin_156389709_318e032c-401a-46f6-95ad-8b181e5e2bdc-articleLarge.jpg?quality=75&auto=webp&disable=upscale", name: "Flatiron Building", correct_answer: "New York City, NY, USA", answer1: "Washington, D.C., USA", answer2: "Agra, India", answer3: "Johannesburg, South Africa")
tflis = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/towers.jpg", name: "Svaneti Towers", correct_answer: "Svaneti, Republic of Georgia", answer1: "Dublin, Ireland", answer2: "Buenos Aires, Argentina", answer3: "Kolkata, India")
taj = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/TajMahal.jpg", name: "Taj Mahal", correct_answer: "Agra, India", answer1: "Kolkata, India", answer2: "Havana, Cuba", answer3: "Angkor Wat, Cambodia")
istanbul = Question.create(img: "https://www.irishtimes.com/polopoly_fs/1.3342257.1514831943!/image/image.jpg_gen/derivatives/box_620_330/image.jpg", name: "Hagia Sophia", correct_answer: "Istanbul, Turkey", answer1: "Havana, Cuba", answer2: "Djenne, Mali", answer3: "Kolkata, India")
manchu_pichu = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/ManchuPichu.jpg", name: "Machu Picchu", correct_answer: "Cusco, Peru", answer1: "Djenne, Mali", answer2: "Buenos Aires, Argentina", answer3: "Angkor Wat, Cambodia")
cardiff = Question.create(img: "file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/architecture-trivia-backend/images/cardiff.JPG", name: "Millennium Centre", correct_answer: "Cardiff, Wales, U.K.", answer1: "Dublin, Ireland", answer2: "London, England, U.K.", answer3: "Istanbul, Turkey")

