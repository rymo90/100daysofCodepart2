/*
 prime.c
 By David Broman.
 Last modified: 2015-09-15
 This file is in the public domain.
*/


#include <stdio.h>

int is_prime(int n){
  int flag= 0;
  if (n > 1){
    for (int i = 2; i <= n/2; ++i) {
      if(n%i== 0){
        flag= 1;
        break;


      }
    }
    if (flag== 0) {
      return 1;
    }else{
      return 0;
    }

  }



}

int main(void){
  printf("%d\n", is_prime(11));  // 11 is a prime.      Should print 1.
  printf("%d\n", is_prime(383)); // 383 is a prime.     Should print 1.
  printf("%d\n", is_prime(987)); // 987 is not a prime. Should print 0.
  return 0;
}
