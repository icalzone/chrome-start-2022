/***
 * 
 */
 var RandomQuote = function () {
    var self = this;


    self.colors = [
        "F44336",
        "9C27B0",
        "673AB7",
        "E91E63",
        "3F51B5",
        "2196F3",
        "03A9F4",
        "00BCD4",
        "009688",
        "4CAF50",
        "8BC34A",
        "CDDC39",
        "FFC107",
        "FF9800",
        "FF5722",
        "607D8B"
    ];
    self.quotes = [
        'If you are not embarrassed by the first version of your product, you’ve launched too late. <span>-Reid Hoffman</span>',
        'Ideas are easy implementation is hard. <span>-Guy Kawasaki</span>',
        'Reject the tyranny of picked. Pick yourself. <span>-Seth Godin</span>',
        'Art is what you can get away with. <span>-Andy Warhol</span>',
        'You must expect great things of yourself before you can do them. <span>-Micheal Jordan</span>',
        'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <span>-Thomas A. Edison</span>',
        'You are never too old to set another goal or to dream a new dream. <span>-C.S. Lewis</span>',
        'Doubt whom you will, but never yourself. <span>-Christian Nestell Bovee</span>',
        'Doubt whom you will, but never yourself. <span>-Christian Nestell Bovee</span>',
        'Every artist was first an amateur. <span>-Ralph Waldo Emerson</span>',
        'In any project the important factor is your belief. Without belief, there can be no successful outcome. <span>-William James</span>',
        'We can do anything we want to do if we stick to it long enough. <span>-Helen Keller</span>',
        'No great man ever complains of want of opportunities. <span>-Ralph Waldo Emerson</span>',
        'We are all faced with a series of great opportunities - brilliantly disguised as insoluable problems. <span>-John Gardner</span></span>',
        'First say to yourself what you would be; and then do what you have to do. <span>-Epictetus</span>',
        'You miss 100% of the shots you don\'t take.  <span>-Wayne Gretzky</span>',
        'Take calculated risks. That is quite different from being rash. <span>-George S. Patton</span>',
        'Storms make oaks take roots. <span>-Proverb</span>',
        'Well begun is half done. <span>-Greek Proverb</span>',
        'And all may do what has by man been done. <span>-Edward Young</span>',
        'Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us. <span>-Samuel Smiles</span>',
        'Work spares us from three evils: boredom, vice, and need. <span>-Voltaire</span>',
        'Do not wait to strike till the iron is hot; but make it hot by striking. <span>-William B. Sprague</span>',
        'Fortune favors the brave. <span>-Publius Terence</span>',
        'When the best things are not possible, the best may be made of those that are. <span>-Richard Hooker</span>',
        'In doubtful matters boldness is everything. <span>-Publilius Syrus</span>',
        'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  <span>–Robert Frost</span>',
        'I attribute my success to this: I never gave or took any excuse. <span>–Florence Nightingale</span>',
        'The most difficult thing is the decision to act, the rest is merely tenacity. <span>–Amelia Earhart</span>',
        'Every strike brings me closer to the next home run. <span>–Babe Ruth</span>',
        'Definiteness of purpose is the starting point of all achievement. <span>–W. Clement Stone</span>',
        'We must balance conspicuous consumption with conscious capitalism. <span>–Kevin Kruse</span>',
        'Life is what happens to you while you’re busy making other plans. <span>–John Lennon</span>',
        'We become what we think about. <span>–Earl Nightingale</span>',
        'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. <span>–Mark Twain</span>',
        'Life is 10% what happens to me and 90% of how I react to it. <span>–Charles Swindoll</span>',
        'The most common way people give up their power is by thinking they don’t have any. <span>–Alice Walker</span>',
        'The best time to plant a tree was 20 years ago. The second best time is now. <span>–Chinese Proverb</span>',
        'An unexamined life is not worth living. <span>-Socrates</span>',
        'Eighty percent of success is showing up. <span>-Woody Allen</span>',
        'Your time is limited, so don’t waste it living someone else’s life. <span>–Steve Jobs</span>',
        'Winning isn’t everything, but wanting to win is. <span>-Vince Lombardi</span>',
        'I am not a product of my circumstances. I am a product of my decisions. <span>–Stephen Covey</span>',
        'Every child is an artist.  The problem is how to remain an artist once he grows up. <span>–Pablo Picasso</span>',
        'You can never cross the ocean until you have the courage to lose sight of the shore. <span>–Christopher Columbus</span>',
        'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. <span>-Maya Angelou</span>',
        'Either you run the day, or the day runs you. <span>–Jim Rohn</span>',
        'Whether you think you can or you think you can’t, you’re right. <span>–Henry Ford</span>',
        'The two most important days in your life are the day you are born and the day you find out why. <span>–Mark Twain</span>',
        'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. <span>–Johann Wolfgang von Goethe</span>',
        'The best revenge is massive success. <span>–Frank Sinatra</span>',
        'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. <span>–Zig Ziglar</span>',
        'Life shrinks or expands in proportion to one’s courage. <span>–Anais Nin</span>',
        'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. <span>–Vincent Van Gogh</span>',
        'There is only one way to avoid criticism: do nothing, say nothing, and be nothing. <span>–Aristotle</span>',
        'The only person you are destined to become is the person you decide to be. <span>–Ralph Waldo Emerson</span>',
        'Go confidently in the direction of your dreams.  Live the life you have imagined. <span>-Henry David Thoreau</span>',
        'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. <span>-Erma Bombeck</span>',
        'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.  <span>-Booker T. Washington</span>',
        'Certain things catch your eye, but pursue only those that capture the heart. <span>-Ancient Indian Proverb</span>',
        'Believe you can and you’re halfway there. <span>-Theodore Roosevelt</span>',
        'Everything you’ve ever wanted is on the other side of fear. <span>-George Addair</span>',
        'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. <span>-Plato</span>',
        'Teach thy tongue to say, “I do not know,” and thous shalt progress. <span>-Maimonides</span>',
        'Start where you are. Use what you have.  Do what you can. <span>-Arthur Ashe</span>',
        'Fall seven times and stand up eight. <span>–Japanese Proverb</span>',
        'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. <span>–Helen Keller</span>',
        'Everything has beauty, but not everyone can see. <span>–Confucius</span>',
        'How wonderful it is that nobody need wait a single moment before starting to improve the world. <span>–Anne Frank</span>',
        'When I let go of what I am, I become what I might be. <span>–Lao Tzu</span>',
        'Life is not measured by the number of breaths we take, but by the moments that take our breath away. <span>–Maya Angelou</span>',
         'Happiness is not something readymade.  It comes from your own actions. <span>–Dalai Lama</span>',
        'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. <span>–Sheryl Sandberg</span>',
        'Too many of us are not living our dreams because we are living our fears. <span>–Les Brown</span>',
        'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. <span>–Unknown</span>',
        'Challenges are what make life interesting and overcoming them is what makes life meaningful. <span>–Joshua J. Marine</span>',
        'If you want to lift yourself up, lift up someone else. <span>–Booker T. Washington</span>',
        'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. <span>–Leonardo da Vinci</span>',
        'Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. <span>–Jamie Paolinetti</span>',
        'You take your life in your own hands, and what happens? A terrible thing, no one to blame. <span>–Erica Jong</span>',
        'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. <span>–Bob Dylan</span>',
        'I didn’t fail the test. I just found 100 ways to do it wrong. <span>–Benjamin Franklin</span>',
        'A person who never made a mistake never tried anything new. <span>-Albert Einstein</span>',
        'The person who says it cannot be done should not interrupt the person who is doing it. <span>–Chinese Proverb</span>',
        "The person who says it cannot be done should not interrupt the person who is doing it. <span>–Chinese Proverb</span>",
        "There are no traffic jams along the extra mile. <span>–Roger Staubach</span>",
        "It is never too late to be what you might have been. <span>–George Eliot</span>",
        "I would rather die of passion than of boredom. <span>–Vincent van Gogh</span>",
        "A truly rich man is one whose children run into his arms when his hands are empty. <span>–Unknown</span>",
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.  <span>–Ann Landers</span>",
        "If you want your children to turn out well, spend twice as much time with them, and half as much money. <span>–Abigail Van Buren</span>",
        "Build your own dreams, or someone else will hire you to build theirs. <span>–Farrah Gray</span>",
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. <span>–Jesse Owens</span>",
        "Education costs money.  But then so does ignorance. <span>–Sir Claus Moser</span>",
        "I have learned over the years that when one’s mind is made up, this diminishes fear. <span>–Rosa Parks</span>",
        "It does not matter how slowly you go as long as you do not stop. <span>–Confucius</span>",
        "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. <span>–Oprah Winfrey</span>",
        "Remember that not getting what you want is sometimes a wonderful stroke of luck. <span>–Dalai Lama</span>",
        "You can’t use up creativity.  The more you use, the more you have. <span>–Maya Angelou</span></span>",
        "Dream big and dare to fail. <span>–Norman Vaughan</span>",
        "Our lives begin to end the day we become silent about things that matter. <span>–Martin Luther King Jr.</span>",
        "Do what you can, where you are, with what you have. <span>–Teddy Roosevelt</span>",
        "If you do what you’ve always done, you’ll get what you’ve always gotten. <span>–Tony Robbins</span>",
        "Dreaming, after all, is a form of planning. <span>–Gloria Steinem</span>",
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. <span>–Mae Jemison</span>",
        "You may be disappointed if you fail, but you are doomed if you don’t try. <span>–Beverly Sills</span>",
        "Remember no one can make you feel inferior without your consent. <span>–Eleanor Roosevelt</span>",
        "Life is what we make it, always has been, always will be. <span>–Grandma Moses</span>",
        "The question isn’t who is going to let me; it’s who is going to stop me. <span>–Ayn Rand</span>",
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. <span>–Henry Ford</span>",
        "It’s not the years in your life that count. It’s the life in your years. <span>–Abraham Lincoln</span>",
        "Change your thoughts and you change your world. <span>–Norman Vincent Peale</span>",
        "Either write something worth reading or do something worth writing. <span>–Benjamin Franklin</span>",
        "The only way to do great work is to love what you do. <span>–Steve Jobs</span>"
    ];


    function init() {
    
    }


    /** 
     * @return
     */
    self.setBackgroundColor = function (hex) {
        if (!hex) {
            throw new Error("A color hex is required.");
        }
        return document.body.style.background = "#" + hex;
    };


    /** 
     * @return - random item from the given array.
     */
    self.getRandom = function (array) {
        if (!array) {
            throw new Error("An array is required.");
        }
        return array[Math.floor(Math.random()*(array.length))];
    };


    /**
     * @param {string} quote
     * @return {object} quote element object
     */
    self.setQuote = function (quote) {
        var element = document.getElementById("quote");

        if (!quote) { 
            quote = self.getRandom(self.quotes);
        }

        if (element) {
            element.innerHTML = quote;
        } else {
            throw new Error("The element with id 'quote' is not defined.");
        }

        return element;
    };


    init();
    return self;
};