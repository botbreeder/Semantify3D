# Semantify3D

Word embedding in 3D spaces.

![blue matrix](https://raw.githubusercontent.com/botbreeder/Semantify3D/main/bm.jpg)

## Overview

This is a platform for manipulating semantic data in 3D spaces.

[Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics) studies the theory that words used and occuring in a same context tend to have similar meanings. Word embedding and LLMs actually "work" because of this. Proximity of words in a textual corpus can be used to build a semantic knowledge of these words. This semantic knowledge, though, is obviously not grounded on anything but itself.

Semantify3D is about creating and animating 3D scenes made of words which are localized in space. The 3D space is a discrete grid of cells, similar to a voxel space. Each cell of this grid can contain several "semes".

A "seme" is a basic unit of meaning. It is a word and its intensity. The word is identified by a string. The intensity is a positive real number.

Instead of focusing on textual proximity in a corpus, here we focus on spatial proximity in a scene. That's the idea.

### Example

Imagine a 50 voxels high representation of my daughter. In the grid, some cells are empty, while others are occupied by her body, her arms, legs, head and so on.

So all the cells that are occupied by her body will contain semes like "human", "body", "female", "woman", "young", ...etc. The cells occupied by her arms will contain additional semes, like "arm" and "limb". And if she's angry, the cells occupied by her head might contain "anger" while those occupied by her heart might contain "fast". 

We're not limited to this kind of informatiion though. We can add visual, auditory, olfactive data, temperature. We can also describe relationships between entities, for instance a particular "dad-daughter" seme that I would share with my daughter. As long as it makes sense, literally, we can use it as a seme.

Of course this is not only 3D. The fourth dimension is time, since a scene can be animated.

### Functionality

From there, this platform aims to provide tools for programmatically create and animate semantic scenes. Just like in a video game engine, you'll find tweening, "voxel sprites" that can be animated, rotated and scaled, all the 3D math. But you'll also find tools for meaning calculation, and hopefully several ways to visualize everything.

Then, the goal is to provide tools for deep learning it all. Experimentation will be needed to find the best ways to learn, and then predict or generate semantic scenes.


