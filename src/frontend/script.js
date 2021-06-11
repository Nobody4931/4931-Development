const QOTD = "welcome to my website";
const Quotes = [
	"make sure to annoy devs with retarded questions",
	"this is your life, and it is ending one minute at a time",
	"fun fact: 100% of deaths are caused by passing away",
	"i spent like an hour rewriting this stupid website",
	"i have a question",
	"i wasted more time making these stupid memes than the actual website",
	"coolmathgames is probably a better search engine",
	"automator winning?",
	"we dont negotiate with terrorists",
	"imagine using xor string obfuscation",
	"imagine being that one guy that decided to eat a bat",
	"coming soon to a computer near you",
	"\"hash ip addresses\", they said",
	"a big thank you to discord for paywalling literally everything",
	"hi college board please stop digging up blackmail on me",
	"inb4 74912302172412th website rewrite",
	"there's probably a stack overflow somewhere in the site code",
	"wait for someone on discord to say theyre going to ddos me",
	"sponsored by nord vpn because you just got ip logged :flushed:",
	"mom look i hosted a website are you proud of me",
	"python - crashing programs by adding a single extra space",
	"japt better than javascript :pensive:"
	// pretty sure...
	// shoutout to...
];

var Timer = null;
var Debounce = false;
var ResetTimer = function() {
	clearTimeout(Timer);
	Timer = setTimeout(RandomQuote, 7500);
	Debounce = false;
}

var CurrentQuote = null;
var RandomQuote = function() {
	if (Debounce == true) return;
	Debounce = true;

	$("#meme").fadeOut(750, () => {
		var NextQuote = Math.floor(Math.random() * Quotes.length);
		while (NextQuote == CurrentQuote)
			NextQuote = Math.floor(Math.random() * Quotes.length);
		CurrentQuote = NextQuote;

		$("#meme").text(Quotes[NextQuote]);
		$("#meme").fadeIn(750, ResetTimer);
	});
}

$("#meme").text(QOTD);
$("#meme").click(RandomQuote);

ResetTimer();
