Context and Problem

We need to add a fly method to all instances of the Duck class. </bR>
However, the newly created RubberDuck class cannot fly. </b>
Given this situation, what is the best practice for adding a fly method
while recognizing this limitation?



Solution </br>
바뀌는 부분과 그렇지 않은 부분 분리하기 </br>
바뀌는 부분을 뽑아내서 하나의 집합으로 묶는다.
이를 통해서, 달라지는 부분이 영향을 미치는 범위를 최소화한다. 

<br>
구현보다는 인터페이스에 맞춰서 프로그래밍 한다. </br>
