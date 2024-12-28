DECLARE
    CURSOR jobHistoy_cur IS
    SELECT end_date - start_date AS calisma_suresi
    FROM hr.job_history
    WHERE department_id = 90;

    job_history_rec job_history_cur%ROWTYPE;
BEGIN

LOOP
    FETCH jobHistory_cur INTO job_history_rec;
    EXIT WHEN jobHistory_cur%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(job_history_rec.calisma_suresi);
END LOOP;

END;