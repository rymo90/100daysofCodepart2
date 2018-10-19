def rot13(message):
    alfabet="abcdefghijklmnopqrstuvwxyz"
    kod=""
    for word in message:
        index = (alfabet.find(word)+13)%26
        kod += alfabet[index]
    return kod
krypto = rot13("hemligheter")
print(krypto, "kryptmessege")
decrept= rot13(krypto)
print(decrept, "decreptmessege")
