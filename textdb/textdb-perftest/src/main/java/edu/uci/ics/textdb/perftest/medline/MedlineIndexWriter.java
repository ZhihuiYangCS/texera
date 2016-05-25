package edu.uci.ics.textdb.perftest.medline;

import java.io.FileNotFoundException;

import org.apache.lucene.analysis.Analyzer;

import edu.uci.ics.textdb.api.common.ITuple;
import edu.uci.ics.textdb.api.storage.IDataStore;
import edu.uci.ics.textdb.common.exception.StorageException;
import edu.uci.ics.textdb.storage.DataStore;
import edu.uci.ics.textdb.storage.writer.DataWriter;

/*
 * This class provides a helper function
 * that can index Medline data.
 * 
 * @author Zuozhi Wang
 */
public class MedlineIndexWriter {
	
	/*
	 * Write medline records from "medlineFilePath"
	 * to index in "indexPath".
	 */
	public static void writeMedlineToIndex(
			String filePath, IDataStore dataStore, Analyzer luceneAnalyzer) 
			throws FileNotFoundException, StorageException {
		writeMedlineToIndex(filePath, dataStore, luceneAnalyzer, Integer.MAX_VALUE);
	}

	/*
	 * Write a maximum of "maxDocNumber" records
	 * from "medlineFilePath"
	 * to index in "indexPath".
	 */
	public static void writeMedlineToIndex(
			String filePath, IDataStore dataStore, Analyzer luceneAnalyzer, int maxDocNumber) 
			throws FileNotFoundException, StorageException {

		DataWriter dataWriter = new DataWriter(dataStore, luceneAnalyzer);
		dataWriter.clearData();
		dataWriter.open();
		
		MedlineData.open(filePath);
		
		int counter = 0;
		ITuple tuple = null;
		while ((tuple = MedlineData.getNextTuple()) != null 
				&& counter < maxDocNumber) {
			dataWriter.writeTuple(tuple);
			counter++;
		}
		
		MedlineData.close();
		dataWriter.close();

	}
	
}