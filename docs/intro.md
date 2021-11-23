---
sidebar_position: 1
---

# Arc-specific Words

Before we begin, we need to define some words that are specific to the Arc ecosystem.

## PageBuilder Editor

PageBuilder Editor is a visual webpage creator. The Editor enables content selection and some visual customization out of the box for non-technical users.

## PageBuilder Engine

PageBuilder Engine is a rendering engine built for Editor.

## Block

A Block is a unit to build a website with Editor. Blocks are wrappers for Engine- and Editor-specific functionality.

Themes Blocks support our core tenet of some customization out of the box. For example, there is an Editor option for hiding or showing an image in a Medium Promo Block. Themes Blocks are created and maintained by Arc Themes developers. Custom Blocks support our core tenet of developer composability. For example, a developer on a client team can implement functionality that is not supported by a Themes Block like a podcast player. Custom Blocks are created and maintained by client developers.

There are three types of Blocks that work with Engine and Editor: Features, Output Types, Content Sources, and Chains.

### Output Type

An Output Type is the outer “shell” of a webpage. It defines the `<head>` element and its contents, as well as parts of the `<body>` including the root element of the React application.

### Content Source

A content source is contained in a block. The content source fetches data in a way that the Engine can use in a performant way.

### Feature

### Chain
