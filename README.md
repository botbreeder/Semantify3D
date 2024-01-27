# Semantify3D

Word embedding in 3D spaces.

![blue matrix](https://raw.githubusercontent.com/botbreeder/Semantify3D/main/bm.jpg)

## Overview

This is a platform for manipulating semantic data in 3D spaces.

[Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics) studies the theory that words used and occuring in a same context tend to have similar meanings. Word embedding and LLMs actually "work" because of this. Proximity of words in a corpus can be used to build a semantic knowledge of these words. This semantic knowledge, though, is obviously not grounded on anything but itself.

Semantify3D is about creating and animating 3D scenes made of words that are located in space. The 3D space is a discrete grid of cells, similar to a voxel space. Each cell of this grid can contain several "semes".

A "seme" is a basic unit of meaning. It is a word and its intensity. The word is identified by a string. The intensity is a positive real number.

### Example

Imagine a 50 voxels high representation of my daughter. In the grid, some cells are empty, while others are occupied by her body, her arms, legs, head and so on.

So all the cells that are occupied by her body will contain semes like "human", "body", "female", "woman", "young", ...etc. The cells occupied by her arms will contain additional semes, like "arm" and "limb". And if she's angry, the cells occupied by her head might contain "anger" while those occupied by her heart might contain "fast". 

We're not limited to this kind of informatiion though. We can add visual, auditory, olfactive data, temperature. We can also describe relationships between entities, for instance a particular "dad-daughter" seme that I would share with my daughter. As long as it makes sense, literally, we can use it as a seme.

Of course this is not only 3D. The fourth dimension is time, since a scene can be animated.




