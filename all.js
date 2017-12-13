			var val =[];
			var but =[];
			var temp;
			var temp1;
			var sco=parseInt(localStorage.getItem("score"));
			var sc;
			var c=0;
			obj = JSON.parse(text);
			function add(index)
			{
				if (obj.answers[index].click1=="true") 
				{	
					obj.answers[index].click1="false";
					c=0;
					alert("clue = "+obj.answers[index].clue);
					var d1=document.getElementById("d1");
					var d2=document.getElementById("d2");
					var d3=document.getElementById("d3");

					var anscount=obj.answers[index].answer.length;
					d2.innerHTML="<br>";
					d1.innerHTML="<br><br><br><br>Now type your "+anscount+" Letters answer<br><br>";
					d1.innerHTML+="clue = "+obj.answers[index].clue +"<br><br>";
					d3.innerHTML="Click on button above for revealing the particular Letter";
					temp=anscount;
					temp1=index;
					for (var i = 0; i < anscount; i++) 
					{
						val[i]=document.createElement("textarea");
						val[i].setAttribute("rows",1);
						val[i].setAttribute("cols",3);
						d2.appendChild(val[i]);
						but[i]=document.createElement("input");
						but[i].setAttribute("value",i+1);
						but[i].setAttribute("type","button");
						but[i].setAttribute("onclick","clue(value);");
						d1.appendChild(but[i]);
					}
				}
				else
					alert("Sorry you have already answered that Try the next option"); 
			}
			function printing() 
			{
				if(c==0)
				{
					c++;	
					var ans;
					for (var i = 0; i < temp; i++)
				 	{
				 		var s=val[i].value;
				 		if(i==0)
				 			ans=s;
				  		else
				 			ans=ans+s;	
				 	}
				 	ans = ans.toLowerCase();
				 	d2.innerHTML=ans;
				 	d1.innerHTML="";
				 	d3.innerHTML="";
				 	ansverify=obj.answers[temp1].answer;
				 	if(ans==ansverify)
				 	{
				 		if(sc==0)
				 			sco=sco+10;
				 		else
				 			if (sc==1)
				 				sco=sco+5;
				 		else
				 			if (sc==2)
				 				sco=sco+3;
				 		else
				 			sco++;
				 		d2.innerHTML+="</br>Answer is Correct<br> score is = "+sco+" <br>Try again";
				 		sc=0;
				 		localStorage.setItem("score",sco);
				 	}
			 		else
						d2.innerHTML+="</br>Answer is Wrong <br> score is = "+score+" <br>Try again"; 		
				}
				else
					alert("answer submitted please proceed");
			}
			function clue(s)
			{
				sc++;
				var clue=obj.answers[temp1].answer;
				val[s-1].value=clue[s-1];
				but[s-1].value=clue[s-1];

			}