User.destroy_all
Recipe.destroy_all

# Guest usernames to be used for demo login (found in frontend/util) #
User.create([
  { 
    username: "chef_excellence", 
    email: "chefex@example.com",
    password: "anexcellentpw"
  }, {
    username: "rocklobster", 
    email: "rockex@example.com",
    password: "testing123"
  }, {
    username: "aa_student", 
    email: "student@ex.com",
    password: "1student1"
  }, {
    username: "jigglybuff", 
    email: "poke@example.net",
    password: "pokemonpw"
  }, {
    username: "mambo", 
    email: "just@example.com",
    password: "jmonika"
  }
])
#############
user1 = User.create({ username: "test", email: "test", password: "tester"})
Recipe.create(title: "Test", body: "testbody", author_id: user1.id)
