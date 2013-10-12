# bem-aib

This is a simple override level for your BEM project which forbids some methods breaking The Absolutely Independent Blocks paradigm (AIB).

AIB was firstly presented by [Vitaly Harisov](https://twitter.com/harisov) at ClientSide'2007. You can get more details in [Vitaly's post](http://vitaly.harisov.name/article/independent-blocks.html) in his blog (only Russian version is available).

The idea is to make blocks independent from other elements on the page. So blocks have knowledge only about their inner elements (and possibly blocks) and know nothing about their parent. It is a nice idea and I love it so much.

In fact, BEM methodology has been evolved from AIB. However, ```i-bem``` has two methods such as ```findBlockOutside``` and ```findBlocksOutside``` which ruin lovely AIB paradigm. Fortunately, we are strong enough to forbid these method by our own. Just use this override level ;)

## Installation
Include this level after [bem-core](https://github.com/bem/bem-core) levels and it works fine. Nobody from your team can use bad methods.
