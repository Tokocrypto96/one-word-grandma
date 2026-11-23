# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Tokocrypto96/one-word-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Tokocrypto96/one-word-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

An entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) competition on [make.fun](https://make.fun).

## The entry

Exactly one word — the single word my grandma would text about AI:

**Robbie**

She never says "artificial intelligence". She gave the robot a name,
like a grandchild. Warm, a little baffled, funny in one word — grandma
has adopted the machine into the family.

## How it works

`main.ts` (Node 22) writes the word to `/output/entry.txt`. Nothing else.
The word is checked against the gate first: one word, 1–30 characters,
no whitespace.

```sh
node main.ts
cat /output/entry.txt
# Robbie
```

## License

MIT — see [LICENSE](LICENSE).
