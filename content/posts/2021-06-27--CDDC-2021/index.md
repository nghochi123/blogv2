---
title: CDDC 2021
tags: ["CTF", "cybersecurity"]
cover: ./TESLAREACTOR.png
author: Ng Ho Chi
---

<re-img src="TESLAREACTOR.png" title="CDDC"></re-img>

CDDC 2021 was the first CTF I took part in. (I actually took part in a small one in JC but I didn't know what I was doing at the time)

In this CTF, there were 9 categories, namely:

- OSINT
- Linux
- Recon
- Web
- Binary Exploitation
- Forensics
- Reverse Engineering
- Crypto
- Windows

If you're interested, I did a writeup on this CTF [here.](https://github.com/nghochi123/CTFWriteups/tree/main/CDDC21)

<re-img src="FINALTALLY.png"></re-img>

The competition started off quite rough. It started at 10am on 23 June but the server got overloaded and shut down within a few minutes. A few teams managed to get access to some of the urls and were able to start work. We managed to get access to some urls but were not able to use them to get anything done. It was postponed to 1pm, then to 6pm, 8pm and then 10am the next day. Honestly, this was rather unfortunate as my team was looking forward to the CTF.

Nevertheless, when we started, we managed to get some quick points (OSINT task 1, Linux task 1,2,3, Binary Exploitation task 1 and as well as the Reverse Engineering tasks were relatively easy) and I managed to get into top 10 within a few hours.

<re-img src="RANK.png"></re-img>

Unfortunately for me, after this, I wasn't able to even get close to the top 10 because I wasn't really good at the other topics. Until the Crypto and Windows tasks came out, the team's score stayed relatively stagnant.

People were starting to troll and grief the servers, so we were confused about whether we weren't good enough to solve the problems or because the servers aren't working properly.

The tasks where we were required to ssh was getting griefed especially hard. Despite getting access restricted by trolls, I couldn't help but feel amazed at the ability of kids my age being able to do such things. Just look at this.

<re-img src="RICK.jpg"></re-img>

## Regrets

Personally, I felt the biggest regret for me was that I was unable to solve the puzzles in binary exploitation. For the buffer overflow, I felt that I got close (I was able to overflow to a function of my choice, and got the addresses of the libc /bin/sh functions), while for the python injection one, I overlooked the fact that we were able to concatenate strings, and attempted to run functions outside the sendback function.

<re-img src="PYTHON.png"></re-img>
<re-img src="BOF.png"></re-img>

## Conclusion

After all the struggling my team had put into the CTF, we managed to end up in top 20. (We're rank 19!) All of us in the team were new to this, and I felt that this was amazing for CTF first timers.

<re-img src="FINALRANK.png"></re-img>

Honestly, although people say that this CTF was by far the worst they had participated in, due to the lack of proper infrastructure and management, I felt that it was actually quite fun. I guess a properly managed one would be an even better experience. I'll probably participate in more CTFs in the future.
