# SuziOnCall product imagery

The homepage hero and category images are generated illustrations. They are not brand catalogue images, certification evidence, verified pin layouts or make/model fitment claims.

`stock-1` through `stock-4` are faithful resized derivatives of the four supplied photographs. The gallery displays clearly labelled AI-enhanced versions (`stock-N-enhanced.webp`); selecting these opens the original-photo derivative for reference. Names describe the cable category and visible construction, not a verified SKU.

The homepage places a range illustration beside the emergency message, followed by a gallery after How It Works. Each gallery image opens a larger file. A WhatsApp action helps drivers send connector photographs for matching. Existing booking and contact flows remain intact.

Before adding named makes/models, obtain supplier-approved product photography, SKU, connector standards, voltage, working length and confirmed availability. Do not infer these from generated illustrations. The mechanical breakaway lanyard example is separate from electrical breakaway-system wiring.

Each gallery entry lists typical vehicle applications rather than guaranteed fitment. Manufacturer range references also checked: https://narva.com.au/collections/trailer-connectors-and-suzi-coils and https://www.trail-link.com.au/product-category/ebs-coils/ . Images alone cannot establish a voltage, standard or pin count for the supplied stock.

Range references consulted: https://cjservices.co.za/suzi-coils and https://trucktrailerspares.com.au/collections/electrical-coils-cable . No third-party product photography was copied.

Regeneration: install dependencies, prepare ignored `scripts/product-image-inputs.local.json` with `originals` (four paths), `generated` and `enhanced` arrays of `{id,path}`, plus a `prompts` array. Run `node scripts/prep-product-images.mjs <delivery-directory>`. The script uses Sharp for faithful enlargements and WebP exports; illustrative assets were created with the built-in image generation tool.
