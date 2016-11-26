export const signedMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

This is a sample message signed by @jjperezaguinaga
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.58
Comment: https://keybase.io/crypto

wsBcBAABCgAGBQJYOMpcAAoJEEcNV2F2U20cE4gH/jhCSVZ3LUh6fnn9eZjkQi1t
+CKAZLWbHlMSZgIsyo1oy7oWxFk7sWOwN9D0SKa13R9ZU8ANGCPPFNKBew0GqYAQ
CUUcFXAGmz+BIZ3UEUwby6KfK1oQs8wQabOerLYiO99YnABA68vWS7htj3VkdQyZ
8op6GZCmtQCkoV47u7VsVoLOYGi50c3jsGfrrtcmBFlwd8GcA/iqMBxmZMCuw1MP
C87d5sRwyHtcSScLjvMUO4zZKpVyI5BCa456YATroG5Z6AQP6/ItQaXpdPeer72i
bGupiCtyoDHSSBz1AjSvkpvasD/wPBqQ4H9xTiNomSMH1g3x7EO8wCXc+zEwVQA=
=0j+z
-----END PGP SIGNATURE-----
`
export const tamperedMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

This is a message that retains the same signature but has been tampered.
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.58
Comment: https://keybase.io/crypto

wsBcBAABCgAGBQJYOMpcAAoJEEcNV2F2U20cE4gH/jhCSVZ3LUh6fnn9eZjkQi1t
+CKAZLWbHlMSZgIsyo1oy7oWxFk7sWOwN9D0SKa13R9ZU8ANGCPPFNKBew0GqYAQ
CUUcFXAGmz+BIZ3UEUwby6KfK1oQs8wQabOerLYiO99YnABA68vWS7htj3VkdQyZ
8op6GZCmtQCkoV47u7VsVoLOYGi50c3jsGfrrtcmBFlwd8GcA/iqMBxmZMCuw1MP
C87d5sRwyHtcSScLjvMUO4zZKpVyI5BCa456YATroG5Z6AQP6/ItQaXpdPeer72i
bGupiCtyoDHSSBz1AjSvkpvasD/wPBqQ4H9xTiNomSMH1g3x7EO8wCXc+zEwVQA=
=0j+z
-----END PGP SIGNATURE-----
`

export const foreignMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

If you have a Keybase account,
you can do what I am going to do for this message.

This message has been cryptographically signed by /u/NadyaNayme 

To verify this message my public key can be 
found at [ https://keybase.pub/nadya/public_unsigned.txt ]
This message can be verified at [ https://keybase.io/verify ]
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAEBCgAGBQJYN78ZAAoJEK5pUA+bZCjJ6woIALEbQYy9V6BZ2094gDHU6F2G
jVDupsQ7iFfS1sRZuFmK1UpSq6xGePnUgCcDot1vxcxBHEP30bD6UabrOfccf17W
WXmfIMQnSyMMys8E2TvY4a0KWIbU4AsTzts/j8fsAmX9x4vBBJRCjWU3gfwf02I0
R9wz2+5aMlzZM6qk+kwWPlRAmDqn+O1n5Z6LbTWPw2RckB3r7AG381hS6bRlBjCe
Amo5H7o3yqrruS4cwMnfT5W5Ma9vqeRCVQtx0nsQvZ8Mgz5IPVFSG/WoqAaaHaov
mr3KxlwgUOd5WsPi0ydnL3iKUa1ftfJBOfBn/pBXh75kDgYwiNLXIayo5HH3b2Y=
=/b/x
-----END PGP SIGNATURE-----`
