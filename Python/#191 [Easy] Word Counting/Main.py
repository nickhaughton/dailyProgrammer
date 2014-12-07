__author__ = 'Nick Haughton'
#Question found at http://www.reddit.com/r/dailyprogrammer/comments/2nynip/2014121_challenge_191_easy_word_counting/
import re

file = open('book.txt', 'r')

words = {}

for l in file:
    l = re.sub(r'[^a-zA-Z]', " ", l).replace("\n", " ")
    for w in l.lower().split(" "):
        if w not in words:
            words[w] = 1
        else:
            words[w] = words.get(w) + 1
del words['']

print(str(words))