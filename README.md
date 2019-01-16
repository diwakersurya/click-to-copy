# click-to-copy

[![Build Status](https://travis-ci.org/diwakersurya/click-to-copy.svg?branch=master)](https://travis-ci.org/diwakersurya/click-to-copy)[![codecov](https://codecov.io/gh/diwakersurya/click-to-copy/branch/master/graph/badge.svg)](https://codecov.io/gh/diwakersurya/click-to-copy) [![Greenkeeper badge](https://badges.greenkeeper.io/diwakersurya/click-to-copy.svg)](https://greenkeeper.io/)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A library for component wrapping labels and h1 so that we can click to copy the
their text.

Sometimes, due to ui/visual design constraints, we end up ellipsising the text
through css. It looks good, but at the same time, we loose the ability to
select-copy-paste the text becuase whatever we copy is not the complete text but
the ellipsised one.

This component solves this problem. You just wrap h1 or label component in Copyable
and it will enable click to copy feature on your label or h1. It picks up the title
attribute of your label or h1 and copies that to your clipboard so that you can paste
it anywhere you want.

```
let text="this is some very long text which you want to copy";
<Copyable>
<h1 title={text} className='u-ellipsise'>
{text} {/*this text is going to be ellipsised due to css. so you can't just select and copy*/}
</h1>
</Copyable>
```

There is a more detailed explanation in [this medium article](https://medium.com/@diwakersurya/click-to-copy-react-component-f87b7eff3197) .
