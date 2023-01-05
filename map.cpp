#include<bits/stdc++.h>
using namespace std;

int main(){
	map<string,int> mpx;
	mpx["harry"]= 98;
	mpx["harry1"]= 55;
	mpx["harry1"]= 85;

	map<string, int> :: iterator iter;

	for( iter=mpx.begin(); iter!=mpx.end(); iter++){
		cout<<mpx.first(1)<<endl;
    }

}