  # hexmain.asm
  # Written 2015-09-04 by F Lundevall
  # Copyright abandonded - this file is in the public domain.

	.text
main:
	li	$a0,0		# change this to test different values
	
	jal	hexasc		# call hexasc
	nop			# delay slot filler (just in case)	

	move	$a0,$v0		# copy return value to argument register

	li	$v0,11		# syscall with v0 = 11 will print out
	run			# one byte from a0 to the Run I/O window
	
stop:	j	stop		# stop after one run
	nop			# delay slot filler (just in case)

hexasc: 
	li	$t1,0x30
	add	$t2,$t1,$a0
    add	$v0,$t2,$0
    jr	$ra
