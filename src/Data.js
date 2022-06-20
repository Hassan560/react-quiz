const Question =
    [
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
            "options": [
                { id: 1, text: "Arthur", isCorrect: false },
                { id: 2, text: "Sir%20Toby%20Belch", isCorrect: false },
                { id: 3, text: "Dirk%20the%20Daring", isCorrect: true },
                { id: 4, text: "Guy%20of%20Gisbourne", isCorrect: false },
            ]
        },
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What%20is%20the%20scientific%20name%20for%20modern%20day%20humans%3F",
            "options": [
                { id: 1, text: "Homo%20Sapiens", isCorrect: true },
                { id: 2, text: "Homo%20Ergaster", isCorrect: false },
                { id: 3, text: "Homo%20Erectus", isCorrect: false },
                { id: 4, text: "Homo%20Neanderthalensis", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Books",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20is%20Ron%20Weasley%27s%20middle%20name%3F",
            "options": [
                { id: 1, text: "Arthur", isCorrect: false },
                { id: 2, text: "Bilius", isCorrect: true },
                { id: 3, text: "John", isCorrect: false },
                { id: 4, text: "Dominic", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Comics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F",
            "options": [
                { id: 1, text: "Malcolm%20Wheeler-Nicholson", isCorrect: false },
                { id: 2, text: "Stan%20Lee", isCorrect: false },
                { id: 3, text: "Robert%20Crumb", isCorrect: false },
                { id: 4, text: "Robert%20Kirkman", isCorrect: true },
            ]
        },
        {
            "category": "Entertainment%3A%20Board%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "At%20the%20start%20of%20a%20standard%20game%20of%20the%20Monopoly%2C%20if%20you%20throw%20a%20double%20six%2C%20which%20square%20would%20you%20land%20on%3F",
            "options": [
                { id: 1, text: "Water%20Works", isCorrect: false },
                { id: 2, text: "Chance", isCorrect: false },
                { id: 3, text: "Electric%20Company", isCorrect: true },
                { id: 4, text: "Community%20Chest", isCorrect: false },
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What%20is%20the%20capital%20of%20Jamaica%3F",
            // "correct_answer": "Kingston",
            // "incorrect_answers": ["Rio%20de%20Janeiro", "Dar%20es%20Salaam", "Kano"]
            "options": [
                { id: 1, text: "Kingston", isCorrect: true },
                { id: 2, text: "Rio%20de%20Janeiro", isCorrect: false },
                { id: 3, text: "Dar%20es%20Salaam", isCorrect: false },
                { id: 4, text: "Kano", isCorrect: false },
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When%20did%20Jamaica%20recieve%20its%20independence%20from%20England%3F%20",
            // "correct_answer": "1962",
            // "incorrect_answers": ["1492", "1963", "1987"]
            "options": [
                { id: 1, text: "1492", isCorrect: false },
                { id: 2, text: "1962", isCorrect: true },
                { id: 3, text: "1963", isCorrect: false },
                { id: 4, text: "1987", isCorrect: false },
            ]
        },
        {
            "category": "Animals",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.",
            // "correct_answer": "False",
            // "incorrect_answers": ["True"]
            "options": [
                { id: 1, text: 'true', isCorrect: false },
                { id: 2, text: 'false', isCorrect: true },
            ]
        },
        {
            "category": "General%20Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In%202013%20how%20much%20money%20was%20lost%20by%20Nigerian%20scams%3F",
            // "correct_answer": "%2412.7%20Billion",
            // "incorrect_answers": [
            //     "%2495%20Million",
            //     "%24956%20Million",
            //     "%242.7%20Billion"
            // ]
            "options": [
                { id: 1, text: "%2495%20Million", isCorrect: false },
                { id: 2, text: "%2412.7%20Billion", isCorrect: true },
                { id: 3, text: "%24956%20Million", isCorrect: false },
                { id: 4, text: "%242.7%20Billion", isCorrect: false },
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How%20old%20was%20Lyndon%20B.%20Johnson%20when%20he%20assumed%20the%20role%20of%20President%20of%20the%20United%20States%3F",
            // "correct_answer": "55",
            // "incorrect_answers": ["50", "60", "54"]
            "options": [
                { id: 1, text: "50", isCorrect: false },
                { id: 2, text: "60", isCorrect: false },
                { id: 3, text: "54", isCorrect: false },
                { id: 4, text: "55", isCorrect: true },
            ]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "In%20World%20of%20Warcraft%20lore%2C%20who%20organized%20the%20creation%20of%20the%20Paladins%3F",
            // "correct_answer": "Alonsus%20Faol",
            // "incorrect_answers": [
            //     "Uther%20the%20Lightbringer",
            //     "Alexandros%20Mograine",
            //     "Sargeras%2C%20The%20Daemon%20Lord"
            // ]
            "options": [
                { id: 1, text: "Alonsus%20Faol", isCorrect: true },
                { id: 2, text: "Uther%20the%20Lightbringer", isCorrect: false },
                { id: 3, text: "Alexandros%20Mograine", isCorrect: false },
                { id: 4, text: "Sargeras%2C%20The%20Daemon%20Lord", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "In%20the%20game%20%22Subnautica%22%2C%20a%20%22Cave%20Crawler%22%20will%20attack%20you.",
            // "correct_answer": "True",
            // "incorrect_answers": ["False"]
            "options": [
                { id: 1, text: 'false', isCorrect: false },
                { id: 2, text: 'true', isCorrect: true },
            ]
        },
        {
            "category": "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What%20is%20the%20name%20of%20the%20device%20that%20allows%20for%20infinite%20energy%20in%20the%20anime%20%22Dimension%20W%22%3F",
            // "correct_answer": "Coils",
            // "incorrect_answers": ["Wires", "Collectors", "Tesla"]
            "options": [
                { id: 1, text: "Wires", isCorrect: false },
                { id: 2, text: "Coils", isCorrect: true },
                { id: 3, text: "Collectors", isCorrect: false },
                { id: 4, text: "Tesla", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What%20is%20the%20name%20of%20Cream%20the%20Rabbit%27s%20mom%20in%20the%20%22Sonic%20the%20Hedgehog%22%20series%3F",
            // "correct_answer": "Vanilla",
            // "incorrect_answers": ["Peach", "Strawberry", "Mint"]
            "options": [
                { id: 1, text: "Peach", isCorrect: false },
                { id: 2, text: "Strawberry", isCorrect: false },
                { id: 3, text: "Vanilla", isCorrect: true },
                { id: 4, text: "Mint", isCorrect: false },
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "These%20two%20countries%20held%20a%20commonwealth%20from%20the%2016th%20to%2018th%20century.",
            // "correct_answer": "Poland%20and%20Lithuania",
            // "incorrect_answers": [
            //     "Hutu%20and%20Rwanda",
            //     "North%20Korea%20and%20South%20Korea",
            //     "Bangladesh%20and%20Bhutan"
            // ]
            "options": [
                { id: 1, text: "Hutu%20and%20Rwanda", isCorrect: false },
                { id: 2, text: "North%20Korea%20and%20South%20Korea", isCorrect: false },
                { id: 3, text: "Poland%20and%20Lithuania", isCorrect: true },
                { id: 4, text: "Bangladesh%20and%20Bhutan", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Television",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which%20of%20these%20voices%20wasn%27t%20a%20choice%20for%20the%20House%20AI%20in%20%22The%20Simpsons%20Treehouse%20of%20Horror%22%20short%2C%20House%20of%20Whacks%3F",
            // "correct_answer": "George%20Clooney",
            // "incorrect_answers": [
            //     "Matthew%20Perry",
            //     "Dennis%20Miller",
            //     "Pierce%20Brosnan"
            // ]
            "options": [
                { id: 1, text: "George%20Clooney", isCorrect: true },
                { id: 2, text: "Matthew%20Perry", isCorrect: false },
                { id: 3, text: "Dennis%20Miller", isCorrect: false },
                { id: 4, text: "Pierce%20Brosnan", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "From%20which%20album%20is%20the%20Gorillaz%20song%2C%20%22On%20Melancholy%20Hill%22%20featured%20in%3F",
            // "correct_answer": "Plastic%20Beach",
            // "incorrect_answers": ["Demon%20Days", "Humanz", "The%20Fall"]
            "options": [
                { id: 1, text: "Demon%20Days", isCorrect: false },
                { id: 2, text: "Humanz", isCorrect: false },
                { id: 3, text: "Plastic%20Beach", isCorrect: true },
                { id: 4, text: "The%20Fall", isCorrect: false },
            ]
        },
        {
            "category": "General%20Knowledge",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Scotland%20voted%20to%20become%20an%20independent%20country%20during%20the%20referendum%20from%20September%202014.",
            // "correct_answer": "False",
            // "incorrect_answers": ["True"]
            "options": [
                { id: 1, text: "false", isCorrect: true },
                { id: 2, text: "true", isCorrect: false },
            ]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In%20Left%204%20Dead%2C%20which%20campaign%20has%20the%20protagonists%20going%20through%20a%20subway%20in%20order%20to%20reach%20a%20hospital%20for%20evacuation%3F",
            // "correct_answer": "No%20Mercy",
            // "incorrect_answers": [
            //     "Subway%20Sprint",
            //     "Hospital%20Havoc",
            //     "Blood%20Harvest"
            // ]
            "options": [
                { id: 1, text: "Subway%20Sprint", isCorrect: false },
                { id: 2, text: "Hospital%20Havoc", isCorrect: false },
                { id: 3, text: "Blood%20Harvest", isCorrect: false },
                { id: 4, text: "No%20Mercy", isCorrect: true },
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20was%20the%20last%20colony%20the%20UK%20ceded%20marking%20the%20end%20of%20the%20British%20Empire%3F",
            // "correct_answer": "Hong%20Kong",
            // "incorrect_answers": ["India", "Australia", "Ireland"]
            "options": [
                { id: 1, text: "India", isCorrect: false },
                { id: 2, text: "Hong%20Kong", isCorrect: true },
                { id: 3, text: "Australia", isCorrect: false },
                { id: 4, text: "Ireland", isCorrect: false },
            ]
        }
    ]
export default Question