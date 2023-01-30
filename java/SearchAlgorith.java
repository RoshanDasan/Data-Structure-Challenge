class SearchAlgorith  
 {   
      public static void main(String[] args)   
      {   
            int[] n={12,24,2,89,34,45};   
            System.out.println("Before sorting");   
            display(n);   
            sort(n);   
            System.out.println("\n After Sorting  :");   
            display(n);   
      }   
      static void display(int n[])   
      {   
         for(int i=0; i<n.length;i++)   
             System.out.print(n[i] + " ");   
      }   
      static void sort(int n[])   
      {   
        int i, j, temp;   
        for(i=0; i<n.length-i;i++)   
            {     
                for(j=0; j<n.length-i-1;j++)   
                    {   
                         if(n[j]>n[j+1])   
                           {   
                                temp = n[j];   
                                n[j] = n[j+1];   
                                n[j+1] = temp;   
                           }   
                    }   
            }   
      }   
 }  