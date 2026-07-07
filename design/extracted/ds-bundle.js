/* @ds-bundle: {"format":3,"namespace":"AshesiResearchClubDesignSystem_cd232d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryPill","sourcePath":"components/core/CategoryPill.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Byline","sourcePath":"components/editorial/Byline.jsx"},{"name":"Callout","sourcePath":"components/editorial/Callout.jsx"},{"name":"CategoryEyebrow","sourcePath":"components/editorial/CategoryEyebrow.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Field.jsx"},{"name":"Textarea","sourcePath":"components/forms/Field.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"868ce73029ab","components/core/Button.jsx":"28befe55ad91","components/core/CategoryPill.jsx":"0b03d06ff432","components/core/IconButton.jsx":"a44bae08ce98","components/core/Tag.jsx":"f21a57a5753c","components/editorial/Byline.jsx":"1f40b9d61fc0","components/editorial/Callout.jsx":"55cc4a2cb6fd","components/editorial/CategoryEyebrow.jsx":"71b9e45b975a","components/editorial/PullQuote.jsx":"d86798549d45","components/forms/Checkbox.jsx":"0b04c4764774","components/forms/Field.jsx":"81490242578c","components/forms/SearchField.jsx":"dcee5cbba31c","ui_kits/magazine/Apply.jsx":"8cb14a6e7766","ui_kits/magazine/Archive.jsx":"bdf805f1c2c8","ui_kits/magazine/Article.jsx":"9964ce438e4a","ui_kits/magazine/ArticleBody.jsx":"c806b8a3c9a2","ui_kits/magazine/Chrome.jsx":"539e3a05e33b","ui_kits/magazine/Home.jsx":"fd14dfeee8b0","ui_kits/magazine/Team.jsx":"f0e5ea425035","ui_kits/magazine/data.js":"c946cca20c40"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AshesiResearchClubDesignSystem_cd232d = window.AshesiResearchClubDesignSystem_cd232d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular researcher/author image (rounded.full is the only round
 * shape in the system). Falls back to monogram initials on the ink fill.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  const base = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-full)',
    overflow: 'hidden',
    flex: '0 0 auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--ink)',
    color: 'var(--on-ink)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: Math.round(size * 0.36),
    letterSpacing: '0.02em',
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "arc-avatar",
    style: {
      ...base,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary editorial CTA. Square corners, sans label, no shadow.
 * Black fill is reserved for primary actions (Apply, Submit). Secondary is an
 * outlined ghost; tertiary is a quiet text link with a sans underline.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'text'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  href,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const pads = {
    sm: '8px 14px',
    md: '11px 20px',
    lg: '15px 28px'
  };
  const fonts = {
    sm: 13,
    md: 14,
    lg: 15
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: size === 'sm' ? 'auto' : 'var(--touch-min)',
    padding: pads[size],
    fontFamily: 'var(--font-sans)',
    fontSize: fonts[size],
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
    userSelect: 'none',
    opacity: disabled ? 0.4 : 1
  };
  const variants = {
    primary: {
      background: 'var(--ink)',
      color: 'var(--on-ink)',
      border: '1px solid var(--ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    text: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid transparent',
      padding: '4px 2px',
      minHeight: 'auto',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  };
  const styles = {
    ...base,
    ...variants[variant],
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "arc-button",
    "data-variant": variant,
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? e => e.preventDefault() : onClick,
    style: styles
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryPill — a filter control for the seven fixed categories. Square,
 * sans uppercase. Inactive is a hairline outline; active inverts to a solid
 * black fill (a 2px black border emphasis variant is also available).
 * Used in the archive filter row and category navigation.
 */
function CategoryPill({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 'var(--touch-min)',
    padding: '9px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-none)',
    cursor: 'pointer',
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    background: active ? 'var(--ink)' : 'transparent',
    color: active ? 'var(--on-ink)' : 'var(--ink)',
    border: active ? '1px solid var(--ink)' : '1px solid var(--hairline)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "arc-pill",
    type: "button",
    "aria-pressed": active,
    onClick: onClick,
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryPill.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square or circular control carrying a single glyph (reader
 * settings, share, applause, menu). Circular form (the only round shape besides
 * avatars) for floating affordances; square for inline toolbar use.
 */
function IconButton({
  children,
  // an svg / glyph node
  label,
  // accessible label (required)
  shape = 'square',
  // 'square' | 'circle'
  variant = 'ghost',
  // 'ghost' | 'filled' | 'outline'
  size = 44,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    padding: 0,
    cursor: 'pointer',
    borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-none)',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    color: 'var(--ink)',
    lineHeight: 0
  };
  const variants = {
    ghost: {
      background: active ? 'var(--ink)' : 'transparent',
      color: active ? 'var(--on-ink)' : 'var(--ink)',
      border: '1px solid transparent'
    },
    filled: {
      background: 'var(--ink)',
      color: 'var(--on-ink)',
      border: '1px solid var(--ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--ink)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "arc-iconbtn",
    type: "button",
    "aria-label": label,
    "aria-pressed": active || undefined,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small sans uppercase label for article topics (Signal Processing,
 * 5G). Square, hairline-bordered. Honors "no chromatic accent": the tag's
 * category color, if any, shows ONLY as a tiny leading dot — never a fill.
 */
function Tag({
  children,
  dotColor,
  href,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 9px',
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    background: 'transparent',
    border: '1px solid var(--hairline)',
    borderRadius: 'var(--radius-none)',
    textDecoration: 'none',
    cursor: href || onClick ? 'pointer' : 'default',
    transition: 'border-color var(--dur-fast) var(--ease-out)'
  };
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "arc-tag",
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...style
    }
  }, rest), dotColor && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-full)',
      background: dotColor,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Byline.jsx
try { (() => {
/**
 * Byline — the author/metadata row under an article headline. Circular author
 * avatar + writer name (links to profile) + published date + read time, all in
 * sans, separated by hairline middots. Shows the WRITER (writtenBy), not the
 * profiled researcher.
 */
function Byline({
  writer,
  writerHref,
  avatarSrc,
  date,
  readTime,
  size = 'md',
  // 'sm' | 'md'
  style
}) {
  const av = size === 'sm' ? 28 : 40;
  const fs = size === 'sm' ? 13 : 14;
  return /*#__PURE__*/React.createElement("div", {
    className: "arc-byline",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: writer,
    size: av
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--muted)',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", null, "By "), writerHref ? /*#__PURE__*/React.createElement("a", {
    href: writerHref,
    style: {
      color: 'var(--ink)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, writer) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, writer), (date || readTime) && /*#__PURE__*/React.createElement("span", null, date && /*#__PURE__*/React.createElement("span", null, " \xB7 ", date), readTime && /*#__PURE__*/React.createElement("span", null, " \xB7 ", readTime, " min read"))));
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Byline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Callout.jsx
try { (() => {
/**
 * Callout — a boxed editorial aside inside the reading column: TL;DR, Q&A,
 * note, or a "checkpoint". Square, framed by a 1px black border (or hairline
 * for the quieter variants), a sans uppercase eyebrow, body in serif. No shadow.
 */
function Callout({
  title,
  children,
  variant = 'note',
  style
}) {
  const frames = {
    note: {
      border: '1px solid var(--hairline)',
      background: 'var(--canvas)'
    },
    tldr: {
      border: '1px solid var(--ink)',
      background: 'var(--tint-paper)'
    },
    aside: {
      borderLeft: '2px solid var(--ink)',
      background: 'transparent',
      paddingLeft: 20
    },
    checkpoint: {
      border: '1px solid var(--ink)',
      background: 'var(--canvas)'
    }
  };
  const isAside = variant === 'aside';
  return /*#__PURE__*/React.createElement("aside", {
    className: "arc-callout",
    "data-variant": variant,
    style: {
      margin: '28px 0',
      padding: isAside ? '4px 0 4px 20px' : '20px 22px',
      borderRadius: 'var(--radius-none)',
      ...frames[variant],
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: isAside ? 'var(--font-display)' : 'var(--font-body)',
      fontSize: isAside ? 21 : 16,
      fontStyle: isAside ? 'italic' : 'normal',
      lineHeight: isAside ? 1.35 : 1.6,
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Callout.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CategoryEyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryEyebrow — the sans uppercase category label above a headline.
 * One of seven fixed categories, rendered as a human-readable label.
 * DECISION: no chromatic accent — category color appears only as an optional
 * 7px leading dot (set `showDot`). Default is plain black text.
 */
const LABELS = {
  'computer-science': 'Computer Science',
  engineering: 'Engineering',
  business: 'Business',
  'social-sciences': 'Social Sciences',
  humanities: 'Humanities',
  interdisciplinary: 'Interdisciplinary',
  other: 'Other'
};
function CategoryEyebrow({
  category = 'other',
  showDot = false,
  href,
  style,
  ...rest
}) {
  const label = LABELS[category] || category;
  const dot = `var(--cat-${category}, var(--ink))`;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    textDecoration: 'none',
    ...style
  };
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "arc-eyebrow-cat",
    href: href,
    style: base
  }, rest), showDot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-full)',
      background: dot,
      flex: '0 0 auto'
    }
  }), label);
}
Object.assign(__ds_scope, { CategoryEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CategoryEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
/**
 * PullQuote — a large serif display quotation lifted from the article body.
 * No quotation-mark ornament beyond the glyphs; a top+bottom hairline frames
 * it. Attribution in sans. Distinct from a blockquote (which stays in body serif).
 */
function PullQuote({
  children,
  cite,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "arc-pullquote",
    style: {
      margin: '36px 0',
      padding: '28px 0',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — square check control (no rounding). Used for the application
 * consent field and filter toggles. Checked state fills with ink.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  id,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-none)',
      border: '1px solid var(--ink)',
      background: checked ? 'var(--ink)' : 'var(--canvas)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5 L5 9.5 L10 3"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — a labelled wrapper for form inputs. Sans label above, optional hint
 * and error below. Square geometry; the field control supplies its own border.
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "arc-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: 'var(--ink)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ink)'
    }
  }, " *")), children, (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: error ? 'var(--ink)' : 'var(--muted)',
      fontWeight: error ? 600 : 400
    }
  }, error || hint));
}
const sharedControl = {
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  color: 'var(--ink)',
  background: 'var(--canvas)',
  border: '1px solid var(--ink)',
  borderRadius: 'var(--radius-none)',
  padding: '11px 13px',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out)'
};

/**
 * Input — single-line text/email/number field. Square, 1px black border.
 */
function Input({
  invalid,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: "arc-input",
    style: {
      ...sharedControl,
      borderColor: invalid ? 'var(--ink)' : 'var(--ink)',
      borderWidth: invalid ? 2 : 1,
      ...style
    }
  }, rest));
}

/**
 * Textarea — multi-line field for abstracts, motivation, long answers.
 */
function Textarea({
  rows = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: "arc-input",
    rows: rows,
    style: {
      ...sharedControl,
      resize: 'vertical',
      lineHeight: 1.5,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Field, Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchField — the live-filtering archive search. Square, 1px black border,
 * leading magnifier glyph. Filtering is instant; there is no submit button.
 */
function SearchField({
  value,
  onChange,
  placeholder = 'Search articles…',
  onClear,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "arc-search",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--ink)',
      borderRadius: 'var(--radius-none)',
      background: 'var(--canvas)',
      padding: '0 12px',
      minHeight: 'var(--touch-min)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    style: {
      color: 'var(--ink)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.2-3.2"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink)',
      padding: '11px 0'
    }
  }, rest)), value && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: onClear,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1,
      padding: 4
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Apply.jsx
try { (() => {
// Ashesi Review — Apply form (sectioned, square inputs, success/error states).
const ARC_AP = window.AshesiResearchClubDesignSystem_cd232d;
function Apply({
  onNav
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  if (submitted) {
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 680,
        margin: '0 auto',
        padding: '90px 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '9999px',
        border: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5l5 5L20 6"
    }))), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 1.08,
        color: 'var(--ink)',
        margin: '0 0 14px'
      }
    }, "Application received"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--ink)',
        maxWidth: 480,
        margin: '0 auto 28px'
      }
    }, "Thank you. The editorial desk reviews pitches on a rolling basis \u2014 expect to hear back within two weeks."), /*#__PURE__*/React.createElement(ARC_AP.Button, {
      variant: "secondary",
      onClick: () => onNav('home')
    }, "Back to the magazine"));
  }
  const submit = e => {
    e.preventDefault();
    if (!consent) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
  };
  const sectionHead = (n, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      margin: '36px 0 18px',
      paddingBottom: 12,
      borderBottom: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, n), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--ink)',
      margin: 0
    }
  }, t));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '48px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "Join the club"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1.05,
      color: 'var(--ink)',
      margin: '12px 0 14px'
    }
  }, "Pitch your research"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ink)',
      maxWidth: 580
    }
  }, "Tell us about the work and why it matters. Strong pitches lead with a real-world problem."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, sectionHead('01', 'About you'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Full name",
    htmlFor: "ap-name",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-name",
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Email",
    htmlFor: "ap-email",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-email",
    type: "email",
    placeholder: "you@ashesi.edu.gh"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Phone",
    htmlFor: "ap-phone"
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-phone",
    placeholder: "+233\u2026"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Program",
    htmlFor: "ap-prog",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-prog",
    placeholder: "e.g. Computer Science"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Year of study",
    htmlFor: "ap-year"
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-year",
    placeholder: "e.g. Year 3"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Research advisor",
    htmlFor: "ap-adv"
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-adv",
    placeholder: "Supervisor name"
  }))), sectionHead('02', 'The research'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Research title",
    htmlFor: "ap-title",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-title",
    placeholder: "Working title is fine"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Category",
    htmlFor: "ap-cat"
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-cat",
    placeholder: "e.g. Engineering"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Project stage",
    htmlFor: "ap-stage"
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-stage",
    placeholder: "e.g. In progress"
  }))), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Abstract",
    htmlFor: "ap-abs",
    hint: "A short summary of the work \u2014 150\u2013300 words.",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Textarea, {
    id: "ap-abs",
    rows: 5,
    placeholder: "What did you investigate, and what did you find?"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Real-world impact",
    htmlFor: "ap-impact",
    required: true
  }, /*#__PURE__*/React.createElement(ARC_AP.Textarea, {
    id: "ap-impact",
    rows: 3,
    placeholder: "Who benefits, and how?"
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Why you want to publish",
    htmlFor: "ap-mot"
  }, /*#__PURE__*/React.createElement(ARC_AP.Textarea, {
    id: "ap-mot",
    rows: 3
  })), /*#__PURE__*/React.createElement(ARC_AP.Field, {
    label: "Supporting materials",
    htmlFor: "ap-url",
    hint: "Link to a paper, repo, or slides."
  }, /*#__PURE__*/React.createElement(ARC_AP.Input, {
    id: "ap-url",
    placeholder: "https://"
  }))), sectionHead('03', 'Consent'), /*#__PURE__*/React.createElement("div", {
    style: {
      border: showError ? '2px solid var(--ink)' : '1px solid var(--hairline)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_AP.Checkbox, {
    id: "ap-consent",
    checked: consent,
    onChange: e => {
      setConsent(e.target.checked);
      setShowError(false);
    },
    label: "I confirm the information provided is accurate and consent to being contacted by the editorial desk."
  }), showError && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink)',
      marginTop: 10
    }
  }, "Please confirm consent before submitting.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(ARC_AP.Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Submit application"), /*#__PURE__*/React.createElement(ARC_AP.Button, {
    variant: "text",
    onClick: () => onNav('home')
  }, "Cancel"))));
}
window.Apply = Apply;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Archive.jsx
try { (() => {
// Ashesi Review — Articles archive with instant search + category filter.
const ARC_AR = window.AshesiResearchClubDesignSystem_cd232d;
function Archive({
  onOpenArticle
}) {
  const D = window.ARC_DATA;
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('all');
  const list = D.articles.filter(a => {
    const catOk = cat === 'all' || a.category === cat;
    const hay = (a.title + ' ' + a.excerpt + ' ' + a.tags.join(' ')).toLowerCase();
    return catOk && hay.includes(q.toLowerCase());
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '48px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1.04,
      color: 'var(--ink)',
      margin: '0 0 24px'
    }
  }, "Articles"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ARC_AR.SearchField, {
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ('')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 8,
      paddingBottom: 28,
      borderBottom: '1px solid var(--ink)'
    }
  }, D.categories.map(([k, l]) => /*#__PURE__*/React.createElement(ARC_AR.CategoryPill, {
    key: k,
    active: cat === k,
    onClick: () => setCat(k)
  }, l))), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--muted)'
    }
  }, "No articles match \u201C", q, "\u201D. Try another keyword or category.")) : /*#__PURE__*/React.createElement("div", null, list.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.slug,
    onClick: () => onOpenArticle(a.slug),
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 28,
      padding: '28px 0',
      borderBottom: '1px solid var(--hairline)',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Photo, {
    ratio: "4/3",
    label: a.categoryLabel
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARC_AR.CategoryEyebrow, {
    category: a.category
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.1,
      color: 'var(--ink)',
      margin: '8px 0 8px'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink)',
      margin: '0 0 12px',
      maxWidth: 620
    }
  }, a.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "By ", a.writtenBy, " \xB7 ", a.publishedDate, " \xB7 ", a.readTime, " min read"))))));
}
window.Archive = Archive;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Archive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Article.jsx
try { (() => {
// Ashesi Review — Article page (the most important screen) with feature slots.
const ARC_A = window.AshesiResearchClubDesignSystem_cd232d;
function Article({
  slug,
  onNav
}) {
  const D = window.ARC_DATA;
  const a = D.articles.find(x => x.slug === slug) || D.articles[0];
  const r = D.researchers[a.researcher];
  const [progress, setProgress] = React.useState(0);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [claps, setClaps] = React.useState(128);
  const [clapped, setClapped] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [serif, setSerif] = React.useState(true);
  const [tint, setTint] = React.useState('white');
  const [scale, setScale] = React.useState(1);
  const scrollRef = React.useRef(null);
  const onScroll = e => {
    const el = e.target;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  };
  const bg = tint === 'warm' ? 'var(--tint-warm)' : tint === 'dark' ? 'var(--dark-bg)' : 'var(--canvas)';
  const ink = tint === 'dark' ? 'var(--dark-ink)' : 'var(--ink)';
  const muted = tint === 'dark' ? 'var(--dark-muted)' : 'var(--muted)';
  const bodyFont = serif ? 'var(--font-body)' : 'var(--font-sans)';
  const P = (children, lead) => /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: bodyFont,
      fontSize: (lead ? 19 : 17) * scale,
      lineHeight: 1.62,
      color: ink,
      margin: '0 0 22px'
    }
  }, children);
  const isCS = a.slug === 'did-dr-nyantakyi-just-replace-gps';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: bg,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: 3,
      background: tint === 'dark' ? '#333' : 'var(--hairline)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: progress * 100 + '%',
      background: ink,
      transition: 'width 80ms linear'
    }
  })), /*#__PURE__*/React.createElement("article", {
    ref: scrollRef,
    onScroll: onScroll,
    style: {
      maxHeight: 'calc(100vh - 79px)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '48px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_A.CategoryEyebrow, {
    category: a.category,
    href: "#"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600
    }
  }, ['EN', 'FR', 'Twi'].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      padding: '4px 8px',
      color: i === 0 ? ink : muted,
      borderBottom: i === 0 ? '2px solid ' + ink : '2px solid transparent',
      cursor: 'pointer'
    }
  }, l)))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 46,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      color: ink,
      margin: '0 0 20px'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 21,
      lineHeight: 1.45,
      color: ink,
      margin: '0 0 26px',
      fontStyle: 'italic'
    }
  }, a.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 14,
      paddingBottom: 22,
      borderBottom: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)')
    }
  }, /*#__PURE__*/React.createElement(ARC_A.Byline, {
    writer: a.writtenBy,
    writerHref: "#",
    date: a.publishedDate,
    readTime: a.readTime
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(ARC_A.IconButton, {
    label: "Listen to this article",
    shape: "circle",
    variant: "outline",
    onClick: () => setPlaying(p => !p)
  }, /*#__PURE__*/React.createElement(window.Icon.Play, null)), /*#__PURE__*/React.createElement(ARC_A.IconButton, {
    label: "Reader settings",
    shape: "circle",
    variant: settingsOpen ? 'filled' : 'outline',
    onClick: () => setSettingsOpen(o => !o)
  }, /*#__PURE__*/React.createElement(window.Icon.Settings, null)))), playing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      border: '1px solid ' + ink,
      padding: '12px 16px',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(ARC_A.IconButton, {
    label: "Pause",
    shape: "circle",
    variant: "filled",
    size: 36,
    onClick: () => setPlaying(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "\u275A\u275A")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: tint === 'dark' ? '#333' : 'var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '34%',
      height: '100%',
      background: ink
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: muted
    }
  }, "1:48 / ", a.readTime, ":00")), settingsOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid ' + ink,
      padding: 18,
      marginTop: 18,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: ink,
      marginBottom: 14
    }
  }, "Reader settings"), /*#__PURE__*/React.createElement(Row, {
    label: "Body type",
    ink: ink
  }, /*#__PURE__*/React.createElement(Seg, {
    options: [['Serif', true], ['Sans', false]],
    value: serif,
    onChange: setSerif,
    ink: ink
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Text size",
    ink: ink
  }, /*#__PURE__*/React.createElement(Seg, {
    options: [['A−', 0.9], ['A', 1], ['A+', 1.15]],
    value: scale,
    onChange: setScale,
    ink: ink
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Background",
    ink: ink
  }, /*#__PURE__*/React.createElement(Seg, {
    options: [['White', 'white'], ['Warm', 'warm'], ['Dark', 'dark']],
    value: tint,
    onChange: setTint,
    ink: ink
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '30px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(window.Photo, {
    ratio: "16/9",
    label: "Featured image",
    tone: tint === 'dark' ? 'dark' : 'light'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: muted,
      marginTop: 8
    }
  }, r.name, " \u2014 ", r.program, ". Photograph for The Ashesi Review.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: muted,
      margin: '18px 0 30px'
    }
  }, "2,481 views \xB7 ", a.readTime, " min read"), isCS ? /*#__PURE__*/React.createElement(BodyCS, {
    P: P,
    bg: bg,
    ink: ink,
    muted: muted,
    scale: scale,
    bodyFont: bodyFont
  }) : /*#__PURE__*/React.createElement(BodyEng, {
    P: P
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      margin: '56px 0',
      paddingTop: 40,
      borderTop: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)')
    }
  }, /*#__PURE__*/React.createElement(ARC_A.IconButton, {
    label: "Applaud",
    shape: "circle",
    variant: clapped ? 'filled' : 'outline',
    size: 56,
    onClick: () => {
      if (!clapped) {
        setClaps(c => c + 1);
        setClapped(true);
      }
    }
  }, /*#__PURE__*/React.createElement(window.Icon.Clap, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: ink
    }
  }, claps, " applause")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: muted,
      borderTop: '1px solid ' + (tint === 'dark' ? 'var(--dark-hairline)' : 'var(--hairline)'),
      paddingTop: 16
    }
  }, "Collaborators: Huawei 5G testing team \xB7 Funding: self-directed research"), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('researcher', r.slug),
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      border: '1px solid ' + ink,
      padding: 20,
      marginTop: 28,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ARC_A.Avatar, {
    name: r.name,
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted
    }
  }, "The researcher"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: ink,
      margin: '4px 0'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: muted
    }
  }, r.program, " \xB7 ", r.yearOfStudy, " \u2192"))))));
}
function Row({
  label,
  children,
  ink
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: ink
    }
  }, label), children);
}
function Seg({
  options,
  value,
  onChange,
  ink
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid ' + ink
    }
  }, options.map(([l, v], i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onChange(v),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 12px',
      cursor: 'pointer',
      border: 'none',
      borderLeft: i ? '1px solid ' + ink : 'none',
      background: value === v ? ink : 'transparent',
      color: value === v ? ink === 'var(--dark-ink)' ? '#111' : '#fff' : ink
    }
  }, l)));
}
window.Article = Article;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/ArticleBody.jsx
try { (() => {
// Ashesi Review — article body block library (the two real articles).
const ARC_B = window.AshesiResearchClubDesignSystem_cd232d;

// --- Article 1: the block-library exemplar ---
function BodyCS({
  P,
  bg,
  ink,
  muted,
  scale,
  bodyFont
}) {
  const H2 = t => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.12,
      color: ink,
      margin: '40px 0 18px'
    }
  }, t);
  const H3 = t => /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 23,
      lineHeight: 1.15,
      color: ink,
      margin: '32px 0 14px'
    }
  }, t);
  const Quote = t => /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '0 0 22px',
      paddingLeft: 20,
      borderLeft: '2px solid ' + ink,
      fontFamily: bodyFont,
      fontSize: 18 * scale,
      lineHeight: 1.55,
      color: ink,
      fontStyle: 'italic'
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", null, P('Isaac Osei Nyantakyi isn\'t your typical "all work, no play" academic. Right off the bat, he drops this gem:', true), Quote('"One fun thing about me is that I\'m an avid gamer. I love video games and have actually created a career path around them. I did a master\'s in e-sports management, organizing gaming tournaments and helping people from the streets find career paths in gaming."'), P('That is incredible! Here\'s a PhD-level researcher who sees gaming as a real way to uplift and motivate young people, overall turning his hobby into opportunities for others. He\'s got a full life outside the lab, and that balance probably fuels his drive.'), H2('Applying Knowledge Is His Guiding Principle'), P(/*#__PURE__*/React.createElement("span", null, "To understand Isaac\\'s research philosophy, we need to understand his guiding principle. He puts it perfectly: \"Application. Every research project I undertake must have a real-world impact\u2026 It\\'s a fertile ground to build systems from scratch and create sustainable innovations that actually improve lives.\" It\\'s that same mindset that took him from telecommunications engineering to China for his master\\'s and PhD, where he joined ", /*#__PURE__*/React.createElement("a", {
    className: "arc-link",
    href: "#"
  }, "Huawei\\'s early 5G team"), ".")), /*#__PURE__*/React.createElement(ARC_B.PullQuote, {
    cite: "Dr. Nyantakyi"
  }, "I was part of the founding team working on deployment and testing."), P('Now there\'s a man who knows what he wants and how to achieve it; he is truly an inspiration!'), /*#__PURE__*/React.createElement(ARC_B.Callout, {
    variant: "aside"
  }, "Imagine blending your passions, like gaming or whatever fires you up, with real impact\u2026 What could that look like for you?"), H2('He Cites A Paper In A Top Journal as His Biggest Milestone'), P('Isaac isn\'t one to brag, but when asked about his biggest milestone, he quietly points to something pretty impressive: his paper on the Adaptive Conjugate Gradient Algorithm (ACGA), published in a top journal and already racking up solid citations. This algorithm helps with accurate location tracking — finding a lost hiker, guiding drones in crowded airspace — filling gaps where GPS fails.'), Quote('"The ACGA combines two signal processing techniques, Angle of Arrival (AOA) and Time Difference of Arrival (TDOA). By combining these two measurements, we can locate where a signal or object is in space."'), /*#__PURE__*/React.createElement(CodeBlock, {
    ink: ink
  }), /*#__PURE__*/React.createElement(ARC_B.PullQuote, {
    cite: "Dr. Nyantakyi"
  }, "It\\'s especially useful in real-life conditions where data isn\\'t clean."), H3('What inspired the impressive algorithm, ACGA?'), P('Upon reading a ton of papers, he saw a gap: most location-tracking methods shine in simulations but flop in noisy real-world settings. Sometimes they\'re just too slow and heavy to be practical.'), P('He rolled up his sleeves, analyzed existing approaches, tested over a hundred implementations, hunted down good datasets (which took months), and iterated until it clicked.'), P(/*#__PURE__*/React.createElement("span", null, "The smart part? He added a ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px dotted ' + ink,
      cursor: 'help'
    },
    title: "A subspace built from successive matrix\u2013vector products; lets the solver converge in far fewer steps."
  }, "Krylov subspace basis"), " to make the whole thing run efficiently even when the real world is messy and noisy.")), /*#__PURE__*/React.createElement(Checkpoint, {
    ink: ink
  }), H3('Tiny Conclusion'), P('Isaac Osei Nyantakyi embodies humble hustle. He\'s a Ghanaian researcher whose guiding ideology is that every project must ask, "Does this solve a real problem better?" What a way to push a field forward without making it about oneself, don\'t you think?'), /*#__PURE__*/React.createElement(ARC_B.Callout, {
    title: "TL;DR",
    variant: "tldr"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: ink
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Who?"), " Ghanaian researcher blending signal processing, renewables and local fixes."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Core belief?"), " Research must deliver real-world impact."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Big win?"), " The ACGA algorithm \u2014 accurate tracking that handles noise like a champ."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Why it matters?"), " Turns complex tech into practical tools for Ghana\\'s challenges."))), /*#__PURE__*/React.createElement(ARC_B.Callout, {
    title: "Quick Q&A",
    variant: "note"
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: ink
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: 600
    }
  }, "How long did the ACGA grind take?"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '2px 0 14px',
      color: muted
    }
  }, "About eight months total of trial and error \u2014 months for datasets, weeks of non-stop runs."), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: 600
    }
  }, "Does he brag about citations?"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '2px 0 0',
      color: muted
    }
  }, "Nope \u2014 quiet confidence. Just notes it\\'s been cited multiple times."))));
}
window.BodyCS = BodyCS;
function CodeBlock({
  ink
}) {
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid ' + ink,
      margin: '0 0 22px',
      background: 'var(--tint-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid ' + ink,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "python"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: ink
    }
  }, copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '14px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: '#111',
      overflowX: 'auto'
    }
  }, `def acga_localize(signal, antennas):
    angle = estimate_aoa(signal, antennas)   # Angle of Arrival
    delay = estimate_tdoa(signal, antennas)  # Time Difference of Arrival
    return krylov_solve(angle, delay)        # efficient in noise`));
}
function Checkpoint({
  ink
}) {
  const [picked, setPicked] = React.useState(null);
  const correct = 1;
  const opts = ['ACGA fully replaces GPS everywhere', 'ACGA fills the gaps where GPS underperforms', 'ACGA only works in clean lab conditions'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid ' + ink,
      padding: 20,
      margin: '8px 0 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: ink,
      marginBottom: 12
    }
  }, "Checkpoint"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: ink,
      marginBottom: 14
    }
  }, "How does ACGA relate to GPS?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, opts.map((o, i) => {
    const isPicked = picked === i;
    const show = picked !== null;
    const good = i === correct;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setPicked(i),
      style: {
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        padding: '10px 14px',
        cursor: 'pointer',
        border: '1px solid ' + (show && good ? ink : isPicked ? ink : 'var(--hairline)'),
        background: show && good ? ink : 'transparent',
        color: show && good ? '#fff' : ink,
        fontWeight: show && good ? 600 : 400
      }
    }, o, show && good ? '  ✓' : show && isPicked && !good ? '  ✕' : '');
  })));
}

// --- Article 2: dense continuous prose ---
function BodyEng({
  P
}) {
  return /*#__PURE__*/React.createElement("div", null, P('Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges. From early collaborations with researchers at Ashesi University and University of Ghana, the Ashesi Class of 2023 alum has continually drawn on the technical foundation he built at the university to solve day-to-day challenges that demand both theory and practical insight.', true), P('His capstone project on facial recognition systems marked a turning point in his academic career, demonstrating his ability to turn academic concepts into functional, real-world solutions. Driven by discomfort, curiosity, and a commitment to meaningful innovation, Elijah continues to deepen his knowledge in interactive machine intelligence as an Intelligent Computing master\'s student at Ashesi University.'), P('His research focused on three components. First, detection: he addressed lighting challenges by improving the system\'s ability to locate faces accurately under varying lighting. Second, feature extraction: he improved the alignment of key facial landmarks using Google\'s FaceNet, a pretrained model that generates robust embeddings even when parts of the face are partially obscured. Finally, classification: he employed distance-based methods and Support Vector Machines (SVMs) to distinguish between individuals\' faces with higher precision. Although the system did not explicitly account for rapid real-time changes in lighting and pose, his final model still achieved roughly 95–96% accuracy.'), P('Building on his capstone, Elijah is exploring the intersection of vision and language — "language-vision models" equipped to both see and understand. He notes existing GPT-based systems are often expensive and inaccessible, motivating him to develop cheaper, smaller, more efficient models that can run locally: a "low-cost, hospital in your pocket" that can listen, see, reduce consultation times, and provide accurate diagnosis for healthcare in Ghana.'), P('Reflecting on his journey, Elijah emphasizes patience as a virtue in research. From professors like Dr. Govindha and Dr. Lumens he learned that thoughtful iteration and attention to detail often lead to more meaningful solutions. His "eureka moments" mainly arose from discomfort and frustration — his capstone was born in the middle of the night when his phone failed to recognize his face and unlock.'));
}
window.BodyEng = BodyEng;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/ArticleBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Ashesi Review — shared chrome: Masthead, Footer, Photo placeholder, ScrollProgress.
// Loaded as text/babel; assigns components to window.

const ARC = window.AshesiResearchClubDesignSystem_cd232d;

// --- Inline line icons (currentColor, 1.7px) ---
const Icon = {
  Menu: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  Close: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 5l14 14M19 5L5 19"
  })),
  Search: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.2-3.2"
  })),
  Settings: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 7h10M5 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17h4M5 17h6M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 7h-2"
  })),
  Clap: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M11 11V5.5a1.5 1.5 0 0 1 3 0V11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 10V4.5a1.5 1.5 0 0 1 3 0V12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 11.5V7a1.5 1.5 0 0 1 3 0v6a7 7 0 0 1-7 7h-1.5a6 6 0 0 1-5-2.7L4 13a1.6 1.6 0 0 1 2.7-1.7L8 13V6.5a1.5 1.5 0 0 1 3 0V11"
  })),
  Play: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M7 5v14l11-7z"
  })),
  Arrow: p => /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))
};
window.Icon = Icon;

// --- Photo placeholder (no real imagery in sources) ---
function Photo({
  ratio = '16/9',
  label = 'Photograph',
  tone = 'light',
  style
}) {
  const bg = tone === 'dark' ? '#1a1a1a' : '#ebe9e4';
  const fg = tone === 'dark' ? '#777' : '#a59f93';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      background: bg,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "46",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: fg,
    strokeWidth: "1.2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l5-4 4 3 3-3 6 5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: fg
    }
  }, label));
}
window.Photo = Photo;

// --- Masthead ---
function Masthead({
  onNav,
  active = 'home',
  onApply
}) {
  const [open, setOpen] = React.useState(false);
  const links = [['articles', 'Articles'], ['researchers', 'Researchers'], ['team', 'Team'], ['about', 'About']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid var(--ink)',
      background: 'var(--canvas)',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 var(--gutter-desktop)',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      minHeight: 76
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    },
    className: "arc-nav-desktop"
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => onNav(k),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.02em',
      color: 'var(--ink)',
      textDecoration: active === k ? 'underline' : 'none',
      textUnderlineOffset: 5
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      textAlign: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: '0.01em',
      color: 'var(--ink)',
      lineHeight: 1
    }
  }, "The Ashesi Review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      marginTop: 4
    }
  }, "Research Club")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ARC.Button, {
    variant: "primary",
    size: "sm",
    onClick: onApply || (() => onNav('apply'))
  }, "Apply"))));
}
window.Masthead = Masthead;

// --- Footer (black band) ---
function Footer({
  onNav
}) {
  const col = (head, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 16
    }
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onNav && onNav('articles'),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: '#cfcfcf',
      textDecoration: 'none'
    }
  }, it))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '48px var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: '#fff'
    }
  }, "The Ashesi Review"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: '#bdbdbd',
      maxWidth: 320,
      marginTop: 12
    }
  }, "Student research, told as a magazine. Published by the Ashesi Research Club, Berekuso, Ghana.")), col('Sections', ['Computer Science', 'Engineering', 'Business', 'Humanities']), col('Club', ['About', 'Team', 'Apply', 'Contact']), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 16
    }
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: '#bdbdbd',
      marginBottom: 12
    }
  }, "New profiles, in your inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid #fff'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Email address",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '11px 12px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#fff',
      color: '#000',
      border: 'none',
      padding: '0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Join")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '32px auto 0',
      paddingTop: 20,
      borderTop: '1px solid #333',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: '#8c8c8c'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ashesi Research Club"), /*#__PURE__*/React.createElement("span", null, "Berekuso \xB7 Ghana")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Home.jsx
try { (() => {
// Ashesi Review — Home (the magazine grid). Sparse state: cover + one secondary.
const ARC_H = window.AshesiResearchClubDesignSystem_cd232d;
function Home({
  onNav,
  onOpenArticle
}) {
  const D = window.ARC_DATA;
  const cover = D.articles.find(a => a.featured);
  const secondary = D.articles.filter(a => !a.featured);
  const r = slug => D.researchers[slug];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 var(--gutter-desktop) 80px'
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: "arc-reveal",
    style: {
      paddingTop: 40,
      cursor: 'pointer'
    },
    onClick: () => onOpenArticle(cover.slug)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(window.Photo, {
    ratio: "16/9",
    label: "Cover \xB7 Dr. Nyantakyi"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(ARC_H.CategoryEyebrow, {
    category: cover.category
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 60,
      lineHeight: 1.04,
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      margin: '14px 0 0'
    }
  }, cover.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--ink)',
      margin: '18px 0 0',
      maxWidth: 720
    }
  }, cover.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(ARC_H.Byline, {
    writer: cover.writtenBy,
    writerHref: "#",
    date: cover.publishedDate,
    readTime: cover.readTime
  })))), /*#__PURE__*/React.createElement("hr", {
    className: "arc-rule",
    style: {
      margin: '56px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 22
    }
  }, "Latest"), secondary.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.slug,
    onClick: () => onOpenArticle(a.slug),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 28,
      cursor: 'pointer',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(window.Photo, {
    ratio: "4/3",
    label: a.categoryLabel
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARC_H.CategoryEyebrow, {
    category: a.category
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.1,
      color: 'var(--ink)',
      margin: '10px 0 0'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, a.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(ARC_H.Byline, {
    writer: a.writtenBy,
    date: a.publishedDate,
    readTime: a.readTime,
    size: "sm"
  })))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--hairline)',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 22
    }
  }, "Profiled researchers"), Object.values(D.researchers).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.slug
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('researcher', p.slug),
    style: {
      display: 'flex',
      gap: 14,
      cursor: 'pointer',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(ARC_H.Avatar, {
    name: p.name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--muted)',
      marginTop: 3
    }
  }, p.program, " \xB7 ", p.yearOfStudy))), i === 0 && /*#__PURE__*/React.createElement("hr", {
    className: "arc-rule",
    style: {
      margin: '18px 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 14
    }
  }, "Join the desk"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink)',
      marginBottom: 16
    }
  }, "Researching something worth telling? Pitch it to the club."), /*#__PURE__*/React.createElement(ARC_H.Button, {
    variant: "secondary",
    onClick: () => onNav('apply')
  }, "Apply to publish")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/Team.jsx
try { (() => {
// Ashesi Review — Team roster & Researcher profile (editorial layouts).
const ARC_T = window.AshesiResearchClubDesignSystem_cd232d;
function Team({
  onNav
}) {
  const D = window.ARC_DATA;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '48px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "The masthead"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 52,
      lineHeight: 1.04,
      color: 'var(--ink)',
      margin: '12px 0 8px'
    }
  }, "Who makes the Review"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ink)',
      maxWidth: 600,
      marginBottom: 8
    }
  }, "The editorial desk \u2014 students who commission, write, fact-check, and design every profile."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, D.team.sort((a, b) => a.order - b.order).map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.name
  }, i > 0 && /*#__PURE__*/React.createElement("hr", {
    className: "arc-rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 24,
      alignItems: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(ARC_T.Avatar, {
    name: m.name,
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--ink)',
      lineHeight: 1.1
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)',
      margin: '4px 0 8px'
    }
  }, m.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--muted)',
      maxWidth: 460
    }
  }, m.description)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, m.specialization), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, m.year)))))));
}
window.Team = Team;
function Researcher({
  slug,
  onNav,
  onOpenArticle
}) {
  const D = window.ARC_DATA;
  const r = D.researchers[slug] || Object.values(D.researchers)[0];
  const articles = D.articles.filter(a => a.researcher === r.slug);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '48px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--muted)',
      textDecoration: 'none'
    }
  }, "\u2190 The Ashesi Review"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      margin: '28px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(ARC_T.Avatar, {
    name: r.name,
    size: 96
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "Researcher"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 46,
      lineHeight: 1.04,
      color: 'var(--ink)',
      margin: '6px 0'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--muted)'
    }
  }, r.program, " \xB7 ", r.yearOfStudy))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--ink)',
      maxWidth: 640,
      margin: '20px 0 28px'
    }
  }, r.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 40
    }
  }, r.interests.map(t => /*#__PURE__*/React.createElement(ARC_T.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      paddingBottom: 16,
      borderBottom: '1px solid var(--ink)'
    }
  }, "Featured in"), articles.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.slug,
    onClick: () => onOpenArticle(a.slug),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 24,
      padding: '22px 0',
      borderBottom: '1px solid var(--hairline)',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ARC_T.CategoryEyebrow, {
    category: a.category
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.12,
      color: 'var(--ink)',
      margin: '8px 0 6px'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "By ", a.writtenBy, " \xB7 ", a.publishedDate, " \xB7 ", a.readTime, " min")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement(window.Photo, {
    ratio: "4/3",
    label: ""
  })))));
}
window.Researcher = Researcher;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/magazine/data.js
try { (() => {
// Ashesi Review — shared sample content (the two real articles + researchers).
// Plain global; loaded before the screen scripts.
window.ARC_DATA = {
  researchers: {
    'isaac-osei-nyantakyi': {
      slug: 'isaac-osei-nyantakyi',
      firstName: 'Isaac',
      lastName: 'Osei Nyantakyi',
      name: 'Isaac Osei Nyantakyi',
      program: 'Electrical Engineering',
      yearOfStudy: 'Faculty',
      bio: "Ghanaian signal-processing researcher and avid gamer with a master's in e-sports management. Did his master's and PhD in China and was part of Huawei's founding 5G deployment-and-testing team. Believes every project must have real-world impact.",
      interests: ['Signal processing', 'Localization (AOA/TDOA)', 'The ACGA algorithm', 'Renewable energy']
    },
    'elijah-boateng': {
      slug: 'elijah-boateng',
      firstName: 'Elijah',
      lastName: 'Kwaku Adutwum Boateng',
      name: 'Elijah Kwaku Adutwum Boateng',
      program: 'Computer Science',
      yearOfStudy: 'Graduate · Class of 2023',
      bio: 'Curious and determined Intelligent Computing master\'s student at Ashesi, Class of 2023. Built a 95–96% accurate facial-recognition capstone and now works on low-cost, locally-runnable vision-language models — a "hospital in your pocket" for healthcare in Ghana.',
      interests: ['Machine intelligence', 'Computer vision', 'Facial recognition', 'Vision-language models', 'Low-cost healthcare AI']
    }
  },
  articles: [{
    slug: 'did-dr-nyantakyi-just-replace-gps',
    title: 'Did Dr. Nyantakyi Just Replace GPS? A Silent Revolution in Signal Tracking',
    category: 'computer-science',
    categoryLabel: 'Computer Science',
    writtenBy: 'Sinam Afi Serwa Ametewee',
    researcher: 'isaac-osei-nyantakyi',
    publishedDate: 'March 13, 2026',
    dateSort: 20260313,
    readTime: 5,
    featured: true,
    excerpt: 'Isaac Osei Nyantakyi blends passion with purpose. From gaming and e-sports management to cutting-edge signal processing research, his work focuses on one core idea: research should solve real-world problems. Through innovations like the ACGA algorithm, he is developing technologies that work even in messy, real-life environments.',
    tags: ['Signal Processing', 'Localization', '5G']
  }, {
    slug: 'from-curiosity-to-impact',
    title: 'From Curiosity To Impact',
    category: 'engineering',
    categoryLabel: 'Engineering',
    writtenBy: 'Ashesi Research Club',
    researcher: 'elijah-boateng',
    publishedDate: 'December 3, 2025',
    dateSort: 20251203,
    readTime: 6,
    featured: false,
    excerpt: 'Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges.',
    tags: ['Machine Learning', 'Computer Vision', 'Healthcare AI']
  }],
  team: [{
    name: 'Sinam Afi Serwa Ametewee',
    role: 'Editor-in-Chief',
    year: 'Year 3',
    specialization: 'Computer Science',
    description: 'Leads the editorial desk and writes long-form researcher profiles.',
    order: 1
  }, {
    name: 'Kojo Mensah',
    role: 'Managing Editor',
    year: 'Year 4',
    specialization: 'Engineering',
    description: 'Runs the publishing pipeline and commissions the category desks.',
    order: 2
  }, {
    name: 'Ama Owusu',
    role: 'Research Editor',
    year: 'Year 3',
    specialization: 'Business',
    description: 'Fact-checks technical claims and liaises with profiled researchers.',
    order: 3
  }, {
    name: 'Yaw Darko',
    role: 'Design Lead',
    year: 'Year 2',
    specialization: 'Interdisciplinary',
    description: 'Owns the black-and-white house style and the reading experience.',
    order: 4
  }],
  categories: [['all', 'All'], ['computer-science', 'Computer Science'], ['engineering', 'Engineering'], ['business', 'Business'], ['social-sciences', 'Social Sciences'], ['humanities', 'Humanities'], ['interdisciplinary', 'Interdisciplinary'], ['other', 'Other']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/magazine/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CategoryPill = __ds_scope.CategoryPill;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.CategoryEyebrow = __ds_scope.CategoryEyebrow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SearchField = __ds_scope.SearchField;

})();
