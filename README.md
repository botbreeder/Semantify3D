# Semantify3D

_Word embedding in 3D spaces._

![blue matrix](https://raw.githubusercontent.com/botbreeder/Semantify3D/main/bm.jpg)

## Overview

This is a platform for manipulating semantic data in 3D spaces.

[Distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics) studies the theory that words used and occuring in a same context tend to have similar meanings. Word embedding and LLMs actually "work" because of this. The proximity of words in a textual corpus can be utilized to build a semantic knowledge of these words. This semantic knowledge, though, is obviously not grounded on anything but itself.

Semantify3D takes a different approach, focusing on the creation and animation of 3D scenes composed of spatially localized words. The 3D space is a discrete grid of cells, similar to a voxel space. Each cell of this grid can contain several "sememes".

A "sememe" is an element of meaning, characterized by a few words and an intensity (a string and a positive number).

Instead of relying on textual proximity in a corpus, here we focus on spatial proximity in a scene. That's the idea.

### Example

Imagine a 50 voxels high representation of my daughter. In the grid, most cells are empty, while others are occupied by her body, her arms, legs, head and so on.

So the cells occupied by her body will contain sememes like "human", "body", "female", "woman", "young", ...etc. Those occupied by her arms will contain additional sememes, like "arm" and "limb". And if she's angry, the cells occupied by her head might contain "anger" while those occupied by her heart might contain "fast". 

Semantify3D isn't limited to such information though. It can incorporate visual, auditory, olfactive data, temperature, or descriptions of relationships between entities, for instance a particular "dad-daughter" sememe that I would share with my daughter. As long as it makes sense, literally, it can be used as a sememe.

Of course this is not only 3D. The fourth dimension is time, since a scene can be animated.

### Functionality

This platform aims to provide tools for programmatically creating and animating semantic scenes. Similar to a video game engine, users will find features like tweening, "voxel sprites" that can be animated, rotated and scaled, alongside generic 3D math. Tools for meaning calculation, and hopefully several ways to visualize everything, will also be available.

Then, the goal is to furnish tools for deep learning it all. Experimentation will be essential to identify optimal learning approaches for predicting or generating semantic scenes.

### Sememes

What makes sememes meaningful is primarily where and when they appear. Context forms a meaning, then meaning participate in a context. Let's take a simple example. If there is always a group of "human head" sememes in the topmost region occupied by "human body" sememes, then we can expect that it will always be the case. Then, if we see a group of "human head" sememes somewhere, we would expect "human body" to be there and underneath.

The context is not only space but also time related. When a father reunites with his daughter after a prolonged separation, a lot of "joy" sememes can be expected to fly around!

The other source of meaning lies in the text used to describe the sememe. If the platform is connected to an LLM at some point, it makes sense to label a human head as "human head" rather than using an arbitrary designation like "foobar24."







