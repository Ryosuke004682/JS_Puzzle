//1つのテーブルに配置出来る最大人数が10人の時、
//100人が1つ以上のテーブルに分かれて座る人数のパターンを求めろ。

Max = 10;
N = 100;


function check(remain ,pre)
{
	if(remain < 0)  { return 0; }
	if(remain == 0) { return 1; }
	
	var count = 0;
	
	for(var i = pre; i <= Max; i++)
	{
		count += check(remain - i , i);
	}
	
	return count;
}

console.log(check(N , 2));