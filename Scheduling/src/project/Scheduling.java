package project;
import java.io.OutputStream;
import java.util.Random;
import ilog.concert.IloException;
import ilog.concert.IloLinearNumExpr;
import ilog.concert.IloNumVar;
import ilog.concert.IloRange;
import ilog.cplex.IloCplex;
import ilog.cplex.IloCplex.Callback.Context;
public class Scheduling {

	static Random random = new Random(100);
	static int n;
	static int m;
	static double W = 10;
	static double H = 10;	

	private static double findHandleTime() { return 40; }
	private static double findInstallTime() { return 180; }

	public static void main(String[] args) {
		double[] dueDate = {1168,1175,1225,1226,1262,1301,1337,1408,1471,1558,1668,1705,1766,1817,1838,1920,1932,1937,1967,1992};
		double[] earlinessCoef = {2,9,5,9,3,1,3,6,9,1,3,2,2,4,5,9,6,3,2,7};
		double[] tardinessCoef = {5,8,1,6,6,3,8,1,1,4,2,7,7,5,10,4,3,4,2,9};
		double[] w = {3,4,3,8,10,7,7,9,5,7,2,6,5,3,3,9,3,2,7,5};
		double[] h = {10,2,8,7,4,10,8,6,3,6,4,10,4,6,8,5,8,7,5,1};

		//		double[] w = {2,4,2,8,9,9,10,6,9,1,7,5,3,4,2,6,9,1,4,7,10,5,4,9,3,10,8,1,9,3,2,1,10,10,3,1,10,7,7,1,6,4,6,6,3,7,10,4,3,9,9,4,4,10,3,10,8,3,4,3,5,3,2,7,7,10,4,10,5,7,7,4,2,2,10,9,9,3,4,9,7,2,1,3,10,6,3,2,1,7,7,5,2,2,10,5,8,6,7,2};
		//		double[] h = {7,9,7,2,7,4,10,3,6,4,1,4,7,1,7,4,4,1,2,4,9,1,6,3,9,2,7,6,8,7,1,2,3,4,8,4,10,7,6,4,3,8,10,5,3,4,6,2,5,2,3,10,6,3,1,6,4,4,4,3,4,2,10,8,6,2,9,3,1,5,2,10,4,10,6,9,7,5,3,2,5,8,10,4,2,2,6,8,8,1,1,7,3,3,3,9,6,9,7,2};
		//		double[] dueDate = {9046,9059,9059,9106,9168,9260,9261,9269,9304,9332,9421,9438,9475,9525,9549,9550,9558,9567,9576,9578,9607,9743,9760,9770,9841,9853,9855,9856,9885,9915,9924,9924,9935,9939,9972,10018,10041,10047,10078,10134,10189,10199,10206,10218,10219,10239,10291,10303,10399,10424,10465,10506,10523,10561,10622,10687,10703,10703,10706,10742,10750,10758,10768,10781,10847,10870,10945,11001,11053,11081,11091,11106,11151,11201,11204,11277,11296,11303,11352,11377,11397,11432,11460,11468,11471,11511,11543,11551,11570,11627,11676,11681,11759,11801,11890,11901,11933,11967,11970,11986};
		//		double[] earlinessCoef = {7,8,5,1,1,9,4,10,4,3,1,10,5,1,9,1,9,1,8,3,9,3,6,2,2,10,3,4,8,10,1,8,10,5,9,1,9,8,8,10,6,7,4,3,8,3,7,1,5,8,7,7,1,6,2,2,5,7,5,4,7,2,9,9,9,6,8,9,4,6,1,5,9,9,7,6,2,9,6,10,3,3,1,5,9,8,1,1,10,5,9,3,1,1,8,10,3,10,1,5};
		//		double[] tardinessCoef = {4,10,3,3,1,2,3,5,1,10,7,2,4,5,6,8,4,10,5,9,3,3,4,9,8,7,4,2,6,7,8,2,9,10,5,7,4,8,6,3,9,7,10,5,1,2,8,9,9,3,4,1,1,1,9,6,8,3,6,3,8,2,4,5,9,4,5,2,7,9,5,6,5,3,3,8,8,8,6,2,4,10,8,9,9,5,6,2,8,6,2,1,4,8,10,4,6,3,3,3};


		n = 20;
		//		int iterations = 1;

		//		int[] a_after = new int[n];	
		//		int[] a = new int[n];
		//		for (int i = 0; i<n; i++) 
		//		{
		//			a[i] = random.nextInt(2);// ;0; // 1 
		//			System.out.print(a[i]+" ");
		//		}
		//		System.out.println();
		//		double[] objectiveValue = new double[iterations];	
		//		double bestObj = Double.MAX_VALUE;
		//		objectiveValue[0] = solveModel(dueDate,earlinessCoef,tardinessCoef,w,h,a);
		//		System.out.print("\n Objective values \n");
		//		for(int k=0;k<objectiveValue.length;k++) System.out.println(objectiveValue[k]);

		//		int[] a = new int[n];
		//		for (int i = 0; i<n; i++) 
		//		{
		//			a[i] = random.nextInt(n);// ;0; // 1 
		//			System.out.print(a[i]+" ");
		//		}
		//		System.out.println();
		//		
		//		long[] objectiveValue = new long[iterations];	
		//		long bestObj = Long.MAX_VALUE;
		//		
		//		int[] _a = a;
		//		
		//		for (int q = 0; q<iterations; q++) 
		//		{
		//			objectiveValue[q] = solveLP(dueDate,earlinessCoef,tardinessCoef,w,h,_a);
		//			if (bestObj>objectiveValue[q])
		//			{
		//				a = _a;
		//				bestObj=objectiveValue[q];
		//			}
		//			
		//			System.out.printf("Iteration %d:\t  %d\t %d  \n", 
		//					q,
		//					objectiveValue[q],
		//					bestObj);
		//			
		//			for (int i = 0; i<n; i++) 
		//			{
		//				if (random.nextDouble()<1.0/50) 
		//					_a[i] = random.nextInt(n);
		//				System.out.print(a[i]+" ");
		//			}
		//			System.out.println();
		//		}

		//		int[] a = new int[n];
		//		for (int i = 0; i<n; i++) 
		//		{
		//			a[i] = random.nextInt(2);// ;0; // 1 
		//			System.out.print(a[i]+" ");
		//		}
		//		System.out.println();
		//		
		//		long[] objectiveValue = new long[iterations];	
		//		long bestObj = Long.MAX_VALUE;
		//		
		//		int[] _a = a;
		//		
		//		for (int q = 0; q<iterations; q++) 
		//		{
		//			objectiveValue[q] = solveModel(dueDate,earlinessCoef,tardinessCoef,w,h,_a);
		//			if (bestObj>objectiveValue[q])
		//			{
		//				a = _a;
		//				bestObj=objectiveValue[q];
		//			}
		//			
		//			System.out.printf("Iteration %d:\t  %d\t %d  \n", 
		//					q,
		//					objectiveValue[q],
		//					bestObj);
		//			
		//			for (int i = 0; i<n; i++) 
		//			{
		//				if (random.nextDouble()<1.0/n) 
		//					_a[i] = Math.abs(-_a[i]);
		//				System.out.print(a[i]+" ");
		//			}
		//			System.out.println();
		//		}

		Scheduling scheduling = new Scheduling();
		scheduling.solveModel(dueDate,earlinessCoef,tardinessCoef,w,h);
	}

	private double solveModel(double[] dueDate, double[] earlinessCoef, double[] tardinessCoef, double[] w, double[] h) {
		m = n;
		double objectiveValue = 0;
		double cMax = getMaxValue(dueDate)+ (n*findHandleTime())+ (n* findInstallTime());	

		try {
			//create an empty model
			IloCplex model = new IloCplex();
			//			model.setParam(IloCplex.IntParam.Threads, 1);
			// print out
//			model.setWarning(new OutputStream() { @Override public void write(int b) { } });
//			model.setOut(new OutputStream() { @Override public void write(int b) { } });
			
			
			model.setParam(IloCplex.DoubleParam.EpInt, 0);
			model.setParam(IloCplex.IntParam.TimeLimit, 360);

			IloNumVar[][] x = new IloNumVar[n][m];
			IloNumVar[] completionTime = new IloNumVar[m];
			IloNumVar[] Z = new IloNumVar[m];
			IloNumVar[][] P = new IloNumVar[n][m]; 
			IloNumVar[] earliness = new IloNumVar[n];
			IloNumVar[] tardiness = new IloNumVar[n];

			for (int i=0; i<n; i++) {
				for (int k=0; k<m; k++) {
					x[i][k] = model.boolVar();
					P[i][k] = model.numVar(-Double.MAX_VALUE,Double.MAX_VALUE);
				}
			}

			for (int k=0;k<m;k++) {
				completionTime[k] = model.numVar(0,(int)cMax);
				Z[k] = model.boolVar();
			}

			for(int i=0; i<n; i++) {
				earliness[i] = model.numVar(0,(int)cMax);
				tardiness[i] = model.numVar(0,(int)cMax);
			}

			//Earliness Tardiness constraints
			//			for(int i=0; i<n; i++) model.addEq(a[i]==1?tardiness[i]:earliness[i],0);

			//Generate Objective
			IloLinearNumExpr objective = model.linearNumExpr(); 
			for(int i=0; i<n; i++) {
				objective.addTerm(earlinessCoef[i], earliness[i]);
				objective.addTerm(tardinessCoef[i], tardiness[i]);
			}
			model.addMinimize(objective);

			//constraint 1
			for(int i=0; i<n; i++) {
				IloLinearNumExpr formular1 = model.linearNumExpr();
				for(int k=0; k<m; k++) formular1.addTerm(1, x[i][k]);
				model.addEq(formular1, 1);
			}

			//constraint 2
			for(int i=0; i<n; i++) {
				for(int k=0; k<m; k++) {
					IloLinearNumExpr formular2 = model.linearNumExpr();
					formular2.addTerm(1, earliness[i]);
					formular2.addTerm(-1, tardiness[i]);
					formular2.addTerm(1, P[i][k]);
					formular2.addTerm(-dueDate[i], x[i][k]);
					formular2.addTerm(1, completionTime[k]);
					model.addEq(formular2, 0);
				}			
			}

			//constraint 3
			for(int i=0; i<n; i++) {
				for(int k=0; k<m; k++) {
					IloLinearNumExpr formular3 = model.linearNumExpr();
					formular3.addTerm(cMax, x[i][k]);
					formular3.addTerm(-1, P[i][k]);
					model.addLe(formular3, cMax);
				}
			}

			//Constraint 4
			for(int i=0; i<n; i++) {
				for(int k=0; k<m; k++) {
					IloLinearNumExpr formular = model.linearNumExpr();
					formular.addTerm(1, P[i][k]);
					formular.addTerm(cMax, x[i][k]);
					model.addLe(formular, cMax);
				}
			}


			//Constraint 5
			IloLinearNumExpr formular4 = model.linearNumExpr();
			formular4.addTerm(findInstallTime(), Z[0]);
			for(int i=0; i<n; i++) formular4.addTerm(findHandleTime(), x[i][0]);				
			formular4.addTerm(-1, completionTime[0]);
			model.addLe(formular4, 0);


			// Constraint 7
			for(int k=1; k<m; k++) {
				IloLinearNumExpr formular5 = model.linearNumExpr();
				formular5.addTerm(1, completionTime[k-1]);
				formular5.addTerm(findInstallTime(), Z[k]);
				for(int i=0; i<n; i++) formular5.addTerm(findHandleTime(), x[i][k]);
				formular5.addTerm(-1, completionTime[k]);
				model.addLe(formular5, 0);
			}

			// Constraint 9
			for(int k=0; k<m; k++) {
				IloLinearNumExpr formular6 = model.linearNumExpr();
				for(int i=0; i<n; i++) formular6.addTerm(1,x[i][k]);
				formular6.addTerm(-n, Z[k]);
				model.addLe(formular6, 0);
			}

			// Constraint 10
			for(int k=0; k<m-1; k++) {
				IloLinearNumExpr formular7 = model.linearNumExpr();				
				formular7.addTerm(1,Z[k+1]);
				for(int i=0; i<n; i++) formular7.addTerm(-1, x[i][k]);
				model.addLe(formular7, 0);
			}

			//Constraint 11
			for(int k=0; k<m-1; k++) {
				IloLinearNumExpr formular8 = model.linearNumExpr();
				for(int i=0; i<n; i++) {	
					formular8.addTerm(w[i]*h[i], x[i][k]);
				}
				model.addLe(formular8, W*H);
			}



int[] v = new int[] {-1, -1, -1, 4, -1, 0, -1, 7, -1, 1, 5, -1, -1, 6, 5, 6, 7, -1, -1, -1};

			for (int i = 0; i<n; i++)
			{
				if (v[i]==-1) continue;
				IloLinearNumExpr exp = model.linearNumExpr();
				exp.addTerm(1, x[i][v[i]]); 
				model.addEq(exp, 1);
			}

			IncumbentCallback fcCallback = new IncumbentCallback(x, completionTime, dueDate);
			long wherefrom = 0;
			wherefrom |= Context.Id.Candidate;
			//			wherefrom |= Context.Id.Relaxation;
			//			wherefrom |= Context.Id.LocalProgress;
			model.use(fcCallback, wherefrom);

			boolean isSolved = model.solve();
			System.out.println("Objective Solved??  " + isSolved);
			if (isSolved) {
				//Get objective variable value that solve the problem
				//double objectiveValue = model.getObjValue();
				objectiveValue = model.getObjValue();
				System.out.println("Objective Value is "+ model.getObjValue());
				for (int i = 0; i<n; i++)
				{
					int ptr = 0;
					for (ptr=0; ptr<m; ptr++) 
					{
						if ((int) Math.round(model.getValue(x[i][ptr]))==1) break;
					}
					System.out.printf("item %d:\tE = %d \tT = %d \tdue = %d \tc = %d \tptr = %d\n", 
							i,
							Math.round(model.getValue(earliness[i])),
							Math.round(model.getValue(tardiness[i])),
							(int)dueDate[i],
							Math.round(model.getValue(completionTime[ptr])),
							ptr);
				}

				for (int k=0; k<m; k++) System.out.println(Math.round(model.getValue(Z[k])));

				//					System.out.println("Optimal/not: " + model.getStatus());
				//					System.out.println("Time for run: " + model.getCplexTime());
				//					System.out.println("relative optimality gap: " + model.getMIPRelativeGap());
				//					System.out.println("x[i][k] Values");
				//					for(int i=0; i<n; i++) {			
				//						 for (int k=0; k<bins; k++) {
				//							 System.out.print("x["+i+"]["+k+"] = " + Math.round(model.getValue(x[i][k]))+" , ");			 
				//						 }
				//						 System.out.print("\n");
				//					}
				//					
				//					for (int k=0; k<bins; k++) {
				//						System.out.println("completionTime["+k+"] = " + model.getValue(completionTime[k]));
				//					}

				double cost = 0;

				for (int k=0; k<m; k++) {
					for(int i=0; i<n; i++) {		
						if(Math.round(model.getValue(x[i][k]))==1) {
							if (dueDate[i]<model.getValue(completionTime[k])) {
								cost += tardinessCoef[i]*(model.getValue(completionTime[k]) - dueDate[i]);
							}else if(dueDate[i]>model.getValue(completionTime[k])) {
								cost += earlinessCoef[i]*(dueDate[i] - model.getValue(completionTime[k]));
							}
						}			 
					}

					// System.out.print("\n cost each = "+ cost+" \n");

				}

				System.out.print("\nCost = "+ cost+" \n");
			}

		} catch (IloException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return objectiveValue;

	}	


	private class IncumbentCallback implements IloCplex.Callback.Function 
	{
		private IloNumVar[][] x;
		private IloNumVar[] c;
		private double[] d;
		private int id = 0;
		private long obj = Integer.MAX_VALUE;

		public IncumbentCallback(IloNumVar[][] x, IloNumVar[] c, double[] dueDate) 
		{
			this.x = x;
			this.c = c;
			this.d = dueDate;
		}

		@Override
		public void invoke(Context context) throws IloException 
		{
			if (context.inCandidate()) solveIncumbent(context);
		}

		private void solveIncumbent(Context context) throws IloException 
		{
			if (obj <= (long)Math.round(context.getCandidateObjective())) 
				return;
			System.out.printf("%d\t", id++);
			for (int item = 0; item<n; item++)
			{
				for (int bin = 0; bin < m; bin++)
				{
					if ((int)Math.round(context.getCandidatePoint(x[item][bin]))==1) 
					{
						System.out.printf("%d\t", bin);
						break;
					}
				}
			}
			obj = Math.min(obj, (long)Math.round(context.getCandidateObjective()));

			System.out.printf("%d\t", (long)Math.round(context.getCandidateObjective()));
			
			for (int item = 0; item<n; item++)
			{
				for (int bin = 0; bin < m; bin++)
				{
					if ((int)Math.round(context.getCandidatePoint(x[item][bin]))==1) 
					{
						if ((int)Math.round(context.getCandidatePoint(c[bin])) < d[item]) System.out.printf("%d\t", 1);
						if ((int)Math.round(context.getCandidatePoint(c[bin])) > d[item]) System.out.printf("%d\t", 2);
						if ((int)Math.round(context.getCandidatePoint(c[bin])) == d[item]) System.out.printf("%d\t", 0);
						break;
					}
				}
			}
			System.out.println();
		}
	}


	private static double getMaxValue(double[] numbers){
		double maxValue = numbers[0];
		for(int i=1;i < numbers.length;i++){
			if(numbers[i] > maxValue){
				maxValue = numbers[i];
			}
		}
		return maxValue;
	}


}