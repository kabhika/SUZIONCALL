# SuziOnCall product imagery

The homepage hero and category images are generated illustrations. They are not brand catalogue images, certification evidence, verified pin layouts or make/model fitment claims.

`stock-1` through `stock-4` are faithful resized derivatives of the four supplied photographs. The enlargement links open larger versions. AI-enhanced interpretations were delivered separately and are not used to identify stock on the site.

The homepage places a range illustration beside the emergency message, followed by a gallery after How It Works. Each gallery image opens a larger file. A WhatsApp action helps drivers send connector photographs for matching. Existing booking and contact flows remain intact.

Before adding named makes/models, obtain supplier-approved product photography, SKU, connector standards, voltage, working length and confirmed availability. Do not infer these from generated illustrations. The mechanical breakaway lanyard example is separate from electrical breakaway-system wiring.

Range references consulted: https://cjservices.co.za/suzi-coils and https://trucktrailerspares.com.au/collections/electrical-coils-cable . No third-party product photography was copied.

Regeneration: install dependencies, prepare ignored `scripts/product-image-inputs.local.json` with `originals` (four paths), `generated` and `enhanced` arrays of `{id,path}`, plus a `prompts` array. Run `node scripts/prep-product-images.mjs <delivery-directory>`. The script uses Sharp for faithful enlargements and WebP exports; illustrative assets were created with the built-in image generation tool.
