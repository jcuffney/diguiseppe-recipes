# Hosted Zone

> creates a hosted zone for a given domain, and then creates a certificate for that domain.

NOTE: certificates will require you to manually go in and add the CNAME records.  This can be done via AWS Certificate Manager. Otherwise it will remain in a "creating stack" state for a long time.
