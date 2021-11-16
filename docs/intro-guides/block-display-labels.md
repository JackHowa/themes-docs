# How To Set Block Display Labels

## label (Object or String)

### Description

The label field is used in the PageBuilder Editor instead of the actual component filename. The primary purpose of this value is to enable internationalization (i18n) for your Feature. If this Feature component will be used by publications in multiple languages, a label allows the PageBuilder Editor to use the translation provided for each locale.

#### Examples

Providing a label as an Object is the preferred approach as it enables internationalization for any locales that are provided in the block implementation.

```jsx title="/blocks/custom-byline-block/features/custom-byline/default.jsx"
import React from "react";
import PropTypes from "@arc-fusion/prop-types";

const BylineWithI18nLabel = (props) => {
  const { customFields } = props;
  const { showByline, byline } = customFields;

  return (
    <div>
      {showByline && (
        <div>
          <p>{byline}</p>
        </div>
      )}
    </div>
  );
};

BylineWithI18nLabel.label = {
  en: "Headline",
  fr: "Le titre",
};

BylineWithI18nLabel.propTypes = {
  customFields: PropTypes.shape({
    showByline: PropTypes.bool,
    byline: PropTypes.string,
  }),
};

export default HeadlineWithI18nLabel;
```

Providing a label as a String is also supported for Features that should always have the same label in the PageBuilder Editor. If a label is provided as a String, then the value will always be used even if the user is in a different locale.

```jsx title="/blocks/custom-byline-block/features/custom-byline/default.jsx"
import React from "react";
import PropTypes from "@arc-fusion/prop-types";

const BylineWithI18nLabel = (props) => {
  const { customFields } = props;
  const { showByline, byline } = customFields;

  return (
    <div>
      {showByline && (
        <div>
          <p>{byline}</p>
        </div>
      )}
    </div>
  );
};

BylineWithI18nLabel.label = `Le titre de l'article`;

BylineWithI18nLabel.propTypes = {
  customFields: PropTypes.shape({
    showByline: PropTypes.bool,
    byline: PropTypes.string,
  }),
};

export default BylineWithI18nLabel;
```
