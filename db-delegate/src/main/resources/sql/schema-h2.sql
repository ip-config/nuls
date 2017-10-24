-- Create table
DROP TABLE IF EXISTS block;
create table IF NOT EXISTS block
(
  hash       VARCHAR2(100) not null,
  height     BIGINT not null,
  create_time BIGINT not null,
  script     binary(255) DEFAULT NULL
   PRIMARY KEY (hash)
);
 -- block  index
 create unique index IF NOT EXISTS block_height_idx on block(height);