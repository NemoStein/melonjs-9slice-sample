# MelonJS 9Slice bug sample

## Setup

Install dependencies (melonjs & servor) and run!
```
npm install
npm run watch
```

The melonJS dependency can be exchanged by a local copy with
```
npm i /path/to/melonjs/repo
```

## Bug

The upper `NineSliceSprite` have it's `width`/`height` updated  
The lower one have it's `nss_width`/`nss_height`  

Note that the upper sprite size is always fixed at the original values, while the lower one rescales correctly.
