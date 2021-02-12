s=input()
#Калькулятор v0.1
# def pos(s):
#     a=0
#     for i in range(0,len(s)):
#         if s[i]=="+" or s[i]=="*" or s[i]=="-" or s[i]=="/" :
#             a=i
#             break
#     return a
# def check(s):
#     posPlus = s.find("+")
#     posMinus = s.find("-")
#     posDel = s.find("/")
#     posMulti = s.find("*")
#     if posPlus == -1: posPlus = 10000
#     if posMinus == -1: posMinus = 10000
#     if posDel == -1: posDel = 10000
#     if posMulti == -1: posMulti = 10000
#     return min(posPlus, posMinus, posDel, posMulti)
# while len(s)!=1:
#     if s[0]!="-":
#
#         if s[check(s)]=="+":
#             if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
#                 plusPos = s.find("+")
#                 plusPos1 = plusPos+1
#                 a = int(s[0:plusPos])
#                 b = int(s[plusPos1: pos(s[plusPos1:]) + (len(s)-len(s[plusPos1:]))])
#                 c = s[pos(s[plusPos1:])+(len(s)-len(s[plusPos1:])):]
#                 s = str(a + b) + c
#             elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
#                 plusPos = s.find("+")
#                 plusPos1 = plusPos+1
#                 a = int(s[0:plusPos])
#                 b = int(s[plusPos1:])
#                 s = a + b
#                 break
#
#         elif s[check(s)]=="*":
#             if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
#                 MultiPos = s.find("*")
#                 MultiPos1 = MultiPos+1
#                 a = int(s[0:MultiPos])
#                 b = int(s[MultiPos1: pos(s[MultiPos1:]) + (len(s)-len(s[MultiPos1:]))])
#                 c = s[pos(s[MultiPos1:])+(len(s)-len(s[MultiPos1:])):]
#                 s = str(a * b) + c
#             elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
#                 MultiPos = s.find("*")
#                 MultiPos1 = MultiPos+1
#                 a = int(s[0:MultiPos])
#                 b = int(s[MultiPos1:])
#                 s = a * b
#                 break
#
#         elif s[check(s)]=="/":
#             if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
#                 DelPos = s.find("/")
#                 DelPos1 = DelPos+1
#                 a = int(s[0:DelPos])
#                 b = int(s[DelPos1: pos(s[DelPos1:]) + (len(s)-len(s[DelPos1:]))])
#                 c = s[pos(s[DelPos1:])+(len(s)-len(s[DelPos1:])):]
#                 s = str(int(a / b)) + c
#             elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
#                 DelPos = s.find("/")
#                 DelPos1 = DelPos+1
#                 a = int(s[0:DelPos])
#                 b = int(s[DelPos1:])
#                 s = int(a / b)
#                 break
#
#         elif s[check(s)]=="-":
#             if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
#                 MinusPos = s.find("-")
#                 MinusPos1 = MinusPos+1
#                 a = int(s[0:MinusPos])
#                 b = int(s[MinusPos1: pos(s[MinusPos1:]) + (len(s)-len(s[MinusPos1:]))])
#                 c = s[pos(s[MinusPos1:])+(len(s)-len(s[MinusPos1:])):]
#                 s = str(a - b) + c
#             elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
#                 MinusPos = s.find("-")
#                 MinusPos1 = MinusPos+1
#                 a = int(s[0:MinusPos])
#                 b = int(s[MinusPos1:])
#                 s = a - b
#                 break
#     else:
#         if s[check(s[1:])+1]=="+":
#             if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
#                 plusPos = s.find("+")
#                 plusPos1 = plusPos+1
#                 a = int(s[0:plusPos])
#                 b = int(s[plusPos1: pos(s[plusPos1:]) + (len(s)-len(s[plusPos1:]))])
#                 c = s[pos(s[plusPos1:])+(len(s)-len(s[plusPos1:])):]
#                 s = str(a + b) + c
#             elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
#                 plusPos = s.find("+")
#                 plusPos1 = plusPos+1
#                 a = int(s[0:plusPos])
#                 b = int(s[plusPos1:])
#                 s = a + b
#                 break
#
#         elif s[check(s[1:])+1]=="*":
#             if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
#                 MultiPos = s.find("*")
#                 MultiPos1 = MultiPos+1
#                 a = int(s[0:MultiPos])
#                 b = int(s[MultiPos1: pos(s[MultiPos1:]) + (len(s)-len(s[MultiPos1:]))])
#                 c = s[pos(s[MultiPos1:])+(len(s)-len(s[MultiPos1:])):]
#                 s = str(a * b) + c
#             elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
#                 MultiPos = s.find("*")
#                 MultiPos1 = MultiPos+1
#                 a = int(s[0:MultiPos])
#                 b = int(s[MultiPos1:])
#                 s = a * b
#                 break
#
#         elif s[check(s[1:])+1]=="/":
#             if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
#                 DelPos = s.find("/")
#                 DelPos1 = DelPos+1
#                 a = int(s[0:DelPos])
#                 b = int(s[DelPos1: pos(s[DelPos1:]) + (len(s)-len(s[DelPos1:]))])
#                 c = s[pos(s[DelPos1:])+(len(s)-len(s[DelPos1:])):]
#                 s = str(int(a / b)) + c
#             elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
#                 DelPos = s.find("/")
#                 DelPos1 = DelPos+1
#                 a = int(s[0:DelPos])
#                 b = int(s[DelPos1:])
#                 s = int(a / b)
#                 break
#
#         elif s[check(s[1:])+1]=="-":
#             if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
#                 MinusPos = s[1:].find("-")+1
#                 MinusPos1 = MinusPos+1
#                 a = int(s[0:MinusPos])
#                 b = int(s[MinusPos1: pos(s[MinusPos1:]) + (len(s)-len(s[MinusPos1:]))])
#                 c = s[pos(s[MinusPos1:])+(len(s)-len(s[MinusPos1:])):]
#                 s = str(a - b) + c
#             elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
#                 MinusPos = s[1:].find("-")+1
#                 MinusPos1 = MinusPos+1
#                 a = int(s[0:MinusPos])
#                 b = int(s[MinusPos1:])
#                 s = a - b
#                 break
def pos(s):
    a=0
    for i in range(0,len(s)):
        if s[i]=="+" or s[i]=="*" or s[i]=="-" or s[i]=="/" :
            a=i
            break
    return a
def check(s):
    posPlus = s.find("+")
    posMinus = s.find("-")
    posDel = s.find("/")
    posMulti = s.find("*")
    if posPlus == -1: posPlus = 10000
    if posMinus == -1: posMinus = 10000
    if posDel == -1: posDel = 10000
    if posMulti == -1: posMulti = 10000
    if posDel != 10000 or posMulti != 10000:
        return min(posDel, posMulti)
    else:
        return min(posPlus, posMinus)
def backfind(s):
    return max(s.rfind("+"), s.rfind("-"))
while len(s)!=1:
    if s[0]!="-":

        if s[check(s)]=="+":
            if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
                plusPos = s.find("+")
                plusPos1 = plusPos+1
                a = int(s[0:plusPos])
                b = int(s[plusPos1: pos(s[plusPos1:]) + (len(s)-len(s[plusPos1:]))])
                c = s[pos(s[plusPos1:])+(len(s)-len(s[plusPos1:])):]
                s = str(a + b) + c
            elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
                plusPos = s.find("+")
                plusPos1 = plusPos+1
                a = int(s[0:plusPos])
                b = int(s[plusPos1:])
                s = a + b
                break

        elif s[check(s)]=="*":
            if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
                MultiPos = s.find("*")
                MultiPos1 = MultiPos+1
                if s[1:MultiPos].find("+") == -1 and s[1:MultiPos].find("-") == -1:
                    a = int(s[0:MultiPos])
                    c1 = ""
                    if s[MultiPos1 + 1:].find("+") == -1 and s[MultiPos1 + 1:].find("*") == -1 and s[MultiPos1 + 1:].find("/") == -1 and s[MultiPos1 + 1:].find("-") == -1:
                        b = int(s[MultiPos1:])
                        c2 = ""
                    else:
                        n = len(s) - len(s[MultiPos1:])
                        b = int(s[MultiPos1:pos(s[MultiPos1:]) + n])
                        c2 = s[pos(s[MultiPos1:]) + n:]
                else:
                    a = int(s[backfind(s[0:MultiPos]) + 1:MultiPos])
                    c1 = s[0:backfind(s[0:MultiPos]) + 1]
                    if s[MultiPos1 + 1:].find("+") == -1 and s[MultiPos1 + 1:].find("*") == -1 and s[MultiPos1 + 1:].find("/") == -1 and s[MultiPos1 + 1:].find("-") == -1:
                        b = int(s[MultiPos1:])
                        c2 = ""
                    else:
                        n = len(s) - len(s[MultiPos1:])
                        b = int(s[MultiPos1:pos(s[MultiPos1:]) + n])
                        c2 = s[pos(s[MultiPos1:]) + n:]
                s = c1 + str(a * b) + c2
            elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
                MultiPos = s.find("*")
                MultiPos1 = MultiPos+1
                a = int(s[0:MultiPos])
                b = int(s[MultiPos1:])
                s = a * b
                break

        elif s[check(s)]=="/":
            if s.count("+") + s.count("-") + s.count("*") + s.count("/") > 1:
                DelPos = s.find("/")
                DelPos1 = DelPos + 1
                if s[1:DelPos].find("+") == -1 and s[1:DelPos].find("-") == -1:
                    a = int(s[0:DelPos])
                    c1 = ""
                    if s[DelPos1 + 1:].find("+") == -1 and s[DelPos1 + 1:].find("*") == -1 and s[DelPos1 + 1:].find("/") == -1 and s[DelPos1 + 1:].find("-") == -1:
                        b = int(s[DelPos1:])
                        c2 = ""
                    else:
                        n = len(s) - len(s[DelPos1:])
                        b = int(s[DelPos1:pos(s[DelPos1:]) + n])
                        c2 = s[pos(s[DelPos1:]) + n:]
                else:
                    a = int(s[backfind(s[0:DelPos]) + 1:DelPos])
                    c1 = s[0:backfind(s[0:DelPos]) + 1]
                    if s[DelPos1 + 1:].find("+") == -1 and s[DelPos1 + 1:].find("*") == -1 and s[DelPos1 + 1:].find("/") == -1 and s[DelPos1 + 1:].find("-") == -1:
                        b = int(s[DelPos1:])
                        c2 = ""
                    else:
                        n = len(s) - len(s[DelPos1:])
                        b = int(s[DelPos1:pos(s[DelPos1:]) + n])
                        c2 = s[pos(s[DelPos1:]) + n:]
                s = c1 + str(int(a / b)) + c2
            elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
                DelPosPos = s.find("/")
                DelPos1 = DelPos + 1
                a = int(s[0:DelPos])
                b = int(s[DelPos1:])
                s = int(a / b)
                break

        elif s[check(s)]=="-":
            if s.count("+") + s.count("-") + s.count("*") + s.count("/") >1:
                MinusPos = s.find("-")
                MinusPos1 = MinusPos+1
                a = int(s[0:MinusPos])
                b = int(s[MinusPos1: pos(s[MinusPos1:]) + (len(s)-len(s[MinusPos1:]))])
                c = s[pos(s[MinusPos1:])+(len(s)-len(s[MinusPos1:])):]
                s = str(a - b) + c
            elif s.count("+") + s.count("-") + s.count("*") + s.count("/") == 1:
                MinusPos = s.find("-")
                MinusPos1 = MinusPos+1
                a = int(s[0:MinusPos])
                b = int(s[MinusPos1:])
                s = a - b
                break
    else:
        if s[check(s[1:])+1]=="+":
            if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
                plusPos = s.find("+")
                plusPos1 = plusPos+1
                a = int(s[0:plusPos])
                b = int(s[plusPos1: pos(s[plusPos1:]) + (len(s)-len(s[plusPos1:]))])
                c = s[pos(s[plusPos1:])+(len(s)-len(s[plusPos1:])):]
                s = str(a + b) + c
            elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
                plusPos = s.find("+")
                plusPos1 = plusPos+1
                a = int(s[0:plusPos])
                b = int(s[plusPos1:])
                s = a + b
                break

        elif s[check(s[1:])+1]=="*":
            if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
                MultiPos = s.find("*")
                MultiPos1 = MultiPos+1
                a = int(s[0:MultiPos])
                b = int(s[MultiPos1: pos(s[MultiPos1:]) + (len(s)-len(s[MultiPos1:]))])
                c = s[pos(s[MultiPos1:])+(len(s)-len(s[MultiPos1:])):]
                s = str(a * b) + c
            elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
                MultiPos = s.find("*")
                MultiPos1 = MultiPos+1
                a = int(s[0:MultiPos])
                b = int(s[MultiPos1:])
                s = a * b
                break

        elif s[check(s[1:])+1]=="/":
            if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
                DelPos = s.find("/")
                DelPos1 = DelPos+1
                a = int(s[0:DelPos])
                b = int(s[DelPos1: pos(s[DelPos1:]) + (len(s)-len(s[DelPos1:]))])
                c = s[pos(s[DelPos1:])+(len(s)-len(s[DelPos1:])):]
                s = str(int(a / b)) + c
            elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
                DelPos = s.find("/")
                DelPos1 = DelPos+1
                a = int(s[0:DelPos])
                b = int(s[DelPos1:])
                s = int(a / b)
                break

        elif s[check(s[1:])+1]=="-":
            if s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") >1:
                MinusPos = s[1:].find("-")+1
                MinusPos1 = MinusPos+1
                a = int(s[0:MinusPos])
                b = int(s[MinusPos1: pos(s[MinusPos1:]) + (len(s)-len(s[MinusPos1:]))])
                c = s[pos(s[MinusPos1:])+(len(s)-len(s[MinusPos1:])):]
                s = str(a - b) + c
            elif s[1:].count("+") + s[1:].count("-") + s[1:].count("*") + s[1:].count("/") == 1:
                MinusPos = s[1:].find("-")+1
                MinusPos1 = MinusPos+1
                a = int(s[0:MinusPos])
                b = int(s[MinusPos1:])
                s = a - b
                break

print(s)            
            
